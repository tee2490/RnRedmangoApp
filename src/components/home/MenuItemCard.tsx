import { Text, View } from 'react-native'
import React from 'react'
import { menuItemModel } from '../../interfaces';

interface Props {
  menuItem: menuItemModel;
}

export default function MenuItemCard(props: Props) {
  return (
    <View>
      <Text>{props.menuItem.name}</Text>
    </View>
  )
}

