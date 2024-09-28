import { View, Text } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../navigates';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "MenuItemDetailScreen">;

export default function MenuItemDetailScreen({ navigation, route }: Props) {
  const { item } = route.params

  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}