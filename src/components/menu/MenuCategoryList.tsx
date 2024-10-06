import { FC, useState } from "react";
import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import { COLORS, SIZES } from "../../common";
import { SD_Categories } from "../../common/SD";

interface Props {
  categoryList: string[];
}

const LIST_ITEM_SIZE = 60;

const MenuCategoryList: FC<Props> = ({ categoryList }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    SD_Categories.APPETIZER
  );

  const onSelect = (category: string) => {
    setSelectedColor(category);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => onSelect(item)} style={styles.listItem}>
              <View
                style={[
                  styles.colorContainer,
                  selectedColor === item && {
                    backgroundColor: COLORS.tertiary,
                  },
                ]}
              >
                <Text numberOfLines={2} style={styles.categoryName}>
                  {item}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  listItem: {
    marginRight: 10,
  },
  colorContainer: {
    height: LIST_ITEM_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.primary2,
    backgroundColor: COLORS.secondary,
  },
  categoryName: {
    fontSize: SIZES.small + 2,
    textAlign: "center",
    paddingHorizontal: 3,
    color: COLORS.primary2,
    textTransform: "capitalize",
  },
});

export default MenuCategoryList;
