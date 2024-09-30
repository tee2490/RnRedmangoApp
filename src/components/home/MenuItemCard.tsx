import { Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import { menuItemModel } from '../../interfaces';
import styles from './MenuItemCard.style';
import { baseUrl, userTest } from '../../common/SD';
import { Ionicons } from "@expo/vector-icons";
import { COLORS, MiniLoader } from '../../common';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigates';
import { useUpdateShoppingCartMutation } from '../../redux/apis/shoppingCartApi';

interface Props {
  menuItem: menuItemModel;
}

export default function MenuItemCard(item: Props) {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  
  const handleAddToCart = async (menuItemId: number) => {
    setIsAddingToCart(true);
    const response = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: 1,
      userId: userTest,
    });
    console.log(response);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };
  
  return (
    <TouchableOpacity onPress={() => navigate('MenuItemDetailScreen',{id : item.menuItem.id})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: baseUrl + item.menuItem.image,
            }}
            style={styles.image}
          />
          {item.menuItem.specialTag.length > 0 && (
            <View style={styles.specialTagContainer}>
              <Ionicons name="star-outline" size={15} color={COLORS.white} />
              <Text style={styles.specialTag} numberOfLines={1}>
                {item.menuItem.specialTag}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.detail}>
          <Text style={styles.name} numberOfLines={1}>
            {item.menuItem.name}
          </Text>
          <Text style={styles.catgory} numberOfLines={1}>
            {item.menuItem.category}
          </Text>
          <Text style={styles.price}>${item.menuItem.price}</Text>
        </View>
        {isAddingToCart ? (
          <TouchableOpacity style={styles.addBtn}>
            <MiniLoader />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.addBtn} onPress={()=>handleAddToCart(item.menuItem.id)}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

