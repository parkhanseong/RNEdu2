import React, { Component } from 'react'
import { createSwitchNavigator } from 'react-navigation'
import MainTab from './MainTab'
import IntroScreen from './IntroScreen'
import SignNavigator from '../Sign'
import { AuthNavigator } from '../Auth'
import RequestScreen from '../Request/RequestNavigator'

const RootNavigator = createSwitchNavigator(
  {
    Request: {
      screen: RequestScreen,
      navigationOptions: {
        title: '신청서 작성'
      }
    },
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
  },
  {}
)

export default RootNavigator
