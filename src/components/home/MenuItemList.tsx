import { FlatList, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { menuItemModel } from "../../interfaces";
import MenuItemCard from "./MenuItemCard";
import styles from "./MenuItemList.style";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FloatingAction } from "react-native-floating-action";
import { COLORS, MainLoader } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { useGetMenuItemsQuery } from "../../redux/apis/menuItemApi";
import { setMenuItem } from "../../redux/menuItemSlice";
import { FormDialog } from "../../ui";
import { RootState } from "../../redux/store";
import { MenuCategoryList } from "../menu";

export default function MenuItemList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryList, setCategoryList] = useState([""]);
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
  const flatListRef = useRef<FlatList>(null);
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useGetMenuItemsQuery(null);
  const [message, setMessage] = useState(null);
  const searchValue = useSelector(
    (state: RootState) => state.menuItemStore.search
  );

  //เมื่อเลือกประเภท หรือ คำค้น ให้ทำการกรองข้อมูลใหม่
  useEffect(() => {
    if (data && data.result) {
      const tempMenuArray = handleFilters(searchValue, selectedCategory);
      setMenuItems(tempMenuArray);
    }
  }, [searchValue, selectedCategory]);

  const handleFilters = (search: string, category: string) => {
    let tempArray =
      category === "All"
        ? [...data.result]
        : data.result.filter(
            (item: menuItemModel) =>
              item.category.toUpperCase() === category.toUpperCase()
          );

    //search functionality
    if (search) {
      const tempSearchMenuItems = [...tempArray];
      tempArray = tempSearchMenuItems.filter((item: menuItemModel) =>
        item.name.toUpperCase().includes(search.toUpperCase())
      );
    }

    return tempArray;
  };

  useEffect(() => {
    if (isError) {
      //ตรวจสอบกรณีเชื่อมต่อกับ backend ผิดพลาด
      const errToString = JSON.stringify(error);
      const errToObject = JSON.parse(errToString);
      setMessage(errToObject.error);
      return;
    }

    //เปลี่ยนเป็น data เมื่อเกิด CRUD ทำการปรับข้อมูลให้เป็นปัจจุบัน
    if (data && data.result) {
      dispatch(setMenuItem(data.result));
      setMenuItems(data.result);

      //อ่านเฉพาะประเภทสินค้ามาเก็บไว้
      const tempCategoryList = ["All"];
      data.result.forEach((item: menuItemModel) => {
        if (tempCategoryList.indexOf(item.category) === -1) {
          tempCategoryList.push(item.category);
        }
      });
      setCategoryList(tempCategoryList);
    }
  }, [data]);

  if (isLoading) {
    return <MainLoader />;
  }

  const actions = [
    {
      icon: <AntDesign name="totop" size={24} color={COLORS.white} />,
      text: "Go to Top",
      name: "bt_go_to_top",
      position: 1,
    },
    {
      icon: (
        <MaterialIcons
          name="vertical-align-bottom"
          size={24}
          color={COLORS.white}
        />
      ),
      text: "Scroll to Bottom",
      name: "bt_scroll",
      position: 1,
    },
  ];

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.categoryContainer}>
        <MenuCategoryList
          categoryList={categoryList}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
      <View style={styles.container}>
        {message && <FormDialog message={message} />}
        <FlatList
          ref={flatListRef}
          data={menuItems}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MenuItemCard menuItem={item} />}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <FloatingAction
          distanceToEdge={{ vertical: 80, horizontal: 20 }}
          actions={actions}
          onPressItem={(name) => {
            if (name === "bt_go_to_top") {
              scrollToTop();
            }

            if (name === "bt_scroll") {
              scrollToBottom();
            }
          }}
        />
      </View>
    </View>
  );
}
