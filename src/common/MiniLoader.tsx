import { ActivityIndicator, View } from 'react-native'
import React, { Component } from 'react'

export default class MiniLoader extends Component {
  render() {
    return (
      <View>
         <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}