import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import MoreScreen from './MoreScreen'
import ProfileScreen from './ProfileScreen'

const MoreNavigator = createStackNavigator({
  More: {
    screen: MoreScreen,
    navigationOptions: {
      title: '더보기'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: '프로필'
    }
  }
})

export default MoreNavigator
