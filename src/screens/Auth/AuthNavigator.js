import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import AgreementScreen from './AgreementScreen'
import IntroScreen from '../Auth/IntroScreen'
import LoginScreen from '../Auth/LoginScreen'
import RegisterScreen from './RegisterScreen'
// import  from '../Button'

const AuthNavigator = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        // title: '인트로',
        header: null,
        headerBackTitle: ''
      }
    },
    Agreement: {
      screen: AgreementScreen,
      navigationOptions: {
        title: '약관 동의'
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: '회원 가입'
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: '로그인'
      }
    }
  },
  {}
)

export default AuthNavigator
