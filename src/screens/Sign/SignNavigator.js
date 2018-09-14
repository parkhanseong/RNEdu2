import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { SignScreen } from '../../screens/Sign'
import { ContractScreen } from '../../screens/Sign'

const SignNavigator = createStackNavigator(
  {
    // contract: {
    //   screen: ContractScreen,
    //   navigationOptions: {
    //     title: '약관 동의',
    //     headerBackTitle: 'Intro'
    //   }
    // },
    sign: {
      screen: SignScreen,
      navigationOptions: {
        title: '회원가입',
        headerBackTitle: '로그인'
      }
    }
  },
  {}
)

export default SignNavigator
