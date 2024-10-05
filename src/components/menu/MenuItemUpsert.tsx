import { useState } from "react";
import { View, Pressable, Text, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomKeyAvoidingView from "../../ui/CustomKeyAvoidingView";
import HorizontalImageList from "./HorizontalImageList";
import OptionModal from "./OptionModal";
import styles from "./MenuItemUpsert.style";
import { COLORS, menuUpsertSchema, selectImages } from "../../common";
import { menuUpsertDto } from "../../interfaces/dto";
import { SD_Categories } from "../../common/SD";
import { Formik } from "formik";
import { BackBtn1, FormButton1, FormInput } from "../../ui";
import RNPickerSelect from "react-native-picker-select";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigates";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { showMessage } from "react-native-flash-message";
import { useCreateMenuItemMutation } from "../../redux/apis/menuItemApi";
import mime from "mime";

const imageOptions = [{ value: "Remove Image", id: "remove" }];

var initialData: menuUpsertDto = {
  name: "Test Name123",
  description: "Test Description",
  specialTag: "Test SpecialTage",
  category: SD_Categories.APPETIZER,
  price: "10.99",
};

// Use the enum values for the picker options
const Categories = [
  { label: SD_Categories.APPETIZER, value: SD_Categories.APPETIZER },
  { label: SD_Categories.BEVERAGES, value: SD_Categories.BEVERAGES },
  { label: SD_Categories.DESSERT, value: SD_Categories.DESSERT },
  { label: SD_Categories.ENTREE, value: SD_Categories.ENTREE },
];

const inValidForm = () => {
  Alert.alert("Invalid Form", "Please provide all required fields", [
    {
      text: "Close",
      onPress: () => {},
    },
  ]);
};

type Props = NativeStackScreenProps<RootStackParamList, "MenuItemUpsert">;

export default function MenuItemUpsert({ route }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [showImageOptions, setShowImageOptions] = useState(false);
  const { id } = route.params;
  const [menuItemInputs, setMenuItemInputs] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const { navigate, goBack } = useNavigation<NavigationProp<RootStackParamList>>();
  const [createMenuItem] = useCreateMenuItemMutation();

  const handleOnImageSelection = async () => {
    const newImages = await selectImages();
    setImages([...images, ...newImages]);
  };

  const onHandleSubmit = async (menuItemInputs: menuUpsertDto) => {
    setLoading(true);
    if (images.length == 0) {
      showMessage({ message: "Please upload an image", type: "warning" });
      setLoading(false);
      return;
    }

    // appending images
    const newImages = images.map((img, index) => ({
      name: "image_" + index,
      type: mime.getType(img),
      uri: img,
    }));

    //ดูจาก https://stackoverflow.com/questions/42521679/how-can-i-upload-a-photo-with-expo
    const fileUri = newImages[0].uri;
    const fileName = fileUri.split("/").pop();
    const match = /\.(\w+)$/.exec(fileName!);
    const fileType = match ? `image/${match[1]}` : `image`;

    const fileData = { uri: fileUri, name: fileName, type: fileType } as any;

    const formData = new FormData();

    //ปรับการนำค่าใส่ใน formData ให้สั้นลงโดยใช้ (key, value)
    type menuInfoKeys = keyof typeof menuItemInputs;

    for (let key in menuItemInputs) {
      const value = menuItemInputs[key as menuInfoKeys];
      formData.append(key, value);
    }
    formData.append("File", fileData);

    let response;

    if (id) {
      //update
    } else {
      //create
      response = await createMenuItem(formData);
      showMessage({
        message: "Menu Item created successfully",
        type: "success",
      });
    }

    if (response) {
      setLoading(false);
      navigate("MainListScreen");
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const FormikForm = () => (
    <Formik
      initialValues={menuItemInputs}
      validationSchema={menuUpsertSchema}
      onSubmit={(values) => {
        setMenuItemInputs(values);
        onHandleSubmit(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        touched,
        handleSubmit,
        values,
        errors,
        isValid,
        setFieldTouched,
        setFieldValue,
      }) => (
        <View>
          <View>
            <FormInput
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange("name")}
            />

            {touched.name && errors.name && (
              <Text style={styles.errorMessage}>{errors.name}</Text>
            )}
          </View>

          <FormInput
            placeholder="Description"
            value={values.description}
            onChangeText={handleChange("description")}
            multiline
            numberOfLines={4}
          />

          <FormInput
            placeholder="specialTag"
            value={values.specialTag}
            onChangeText={handleChange("specialTag")}
          />

          <View>
            <FormInput
              placeholder="price"
              value={values.price}
              onChangeText={handleChange("price")}
              keyboardType="numeric"
            />
            {touched.price && errors.price && (
              <Text style={styles.errorMessage}>{errors.price}</Text>
            )}
          </View>

          <View>
            <RNPickerSelect
              style={{
                inputAndroid: styles.inputAndroid,
                viewContainer: styles.pickerContainer,
              }}
              onValueChange={(value) => setFieldValue("category", value)}
              items={Categories}
              placeholder={{ label: "Select category...", value: null }}
              value={values.category}
            />
            {touched.category && errors.category && (
              <Text style={styles.errorMessage}>{errors.category}</Text>
            )}
          </View>

          <View style={styles.nextContainer}>
            <BackBtn1 size={40} onPress={() => goBack()} />

            <FormButton1
              loading={loading}
              title={id ? "Update" : "Create"}
              onPress={isValid ? handleSubmit : inValidForm}
              isValid={isValid}
              color={id ? COLORS.primary : COLORS.danger}
            />
          </View>
        </View>
      )}
    </Formik>
  );

  return (
    <CustomKeyAvoidingView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Pressable
            onPress={handleOnImageSelection}
            style={styles.fileSelector}
          >
            <View style={styles.iconContainer}>
              <FontAwesome5 name="images" size={24} color="black" />
            </View>
            <Text style={styles.btnTitle}>Add Images</Text>
          </Pressable>

          <HorizontalImageList
            images={images}
            onLongPress={(img) => {
              setSelectedImage(img);
              setShowImageOptions(true);
            }}
          />
        </View>

        {/* Image Options */}
        <OptionModal
          visible={showImageOptions}
          onRequestClose={setShowImageOptions}
          options={imageOptions}
          renderItem={(item) => {
            return <Text style={styles.imageOption}>{item.value}</Text>;
          }}
          onPress={(option) => {
            if (option.id === "remove") {
              const newImages = images.filter((img) => img !== selectedImage);
              setImages([...newImages]);
            }
          }}
        />

        <FormikForm />
      </View>
    </CustomKeyAvoidingView>
  );
}
