import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, StackNavigator } from 'react-navigation'
import { NetworkScreen, NetworkDetailScreen } from '../../screens/Network'
import { ModalView } from '../../container/Base'
import LoadingView from '../../container/Base'

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
    },
    ModalScreen: {
      screen: ModalView,
      navigationOptions: {
        title: '모달 스크린',
        headerBackTitle: 'Back'
      }
    }
  },
  {
    // mode: 'modal'
    // headerMode: 'none'
  }
)

const RootStack = createStackNavigator(
  {
    NetworkNavigator: {
      screen: NetworkNavigator
    },
    ModalView: {
      screen: ModalView
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

// const MainModalNavigator = StackNavigator(
//   {
//     MainCardNavigator: { screen: MainCardNavigator }
//     ModalScreen1: { screen: ModalScreen1 },
//     ModalScreen2: { screen: ModalScreen2 },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   },
// );

export default NetworkNavigator
