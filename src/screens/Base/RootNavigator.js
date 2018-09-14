import React, { Component } from 'react'
import { createSwitchNavigator } from 'react-navigation'
import MainTab from './MainTab'
// import LoadScreen from './LoadScreen'
// import Auth from '../Auth/Auth'
import IntroScreen from './IntroScreen'
import SignNavigator from '../Sign'
import { AuthNavigator } from '../Auth'
// import PermissionScreen from './PermissionScreen'
// import { customStyle } from '../../lib/utils'

const RootNavigator = createSwitchNavigator(
  {
    Auth: {
      screen: AuthNavigator,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: MainTab,
      key: 'Main',
      navigationOptions: {
        header: null
      }
    }
    // Load: {
    //   screen: LoadScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // Introduce: {
    //   screen: IntroScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // Auth: {
    //   screen: Auth,
    //   navigationOptions: {
    //     header: null,
    //     headerBackTitle: '로그인'
    //   }
    // },
    // Sign: {
    //   screen: SignNavigator,
    //   key: 'Sign',
    //   navigationOptions: {
    //     header: null
    //   }
    // }
  },
  {}
)

export default RootNavigator
