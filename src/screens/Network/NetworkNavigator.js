import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, StackNavigator } from 'react-navigation'
import { NetworkScreen, NetworkDetailScreen } from '../../screens/Network'

// const ButtonNavigator = createDrawerNavigator(
const NetworkNavigator = createStackNavigator(
  {
    Network: {
      screen: NetworkScreen,
      navigationOptions: {
        title: '프로필',
        headerBackTitle: '프로필 수정'
      }
    },
    NetworkDetail: {
      screen: NetworkDetailScreen,
      navigationOptions: {
        title: '디테일 스크린',
        headerBackTitle: 'Back'
      }
    }
  },
  {}
)

export default NetworkNavigator
