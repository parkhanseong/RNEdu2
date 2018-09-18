import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import AgreementScreen from './AgreementScreen'
import IntroScreen from '../Auth/IntroScreen'
import LoginScreen from '../Auth/LoginScreen'
import RegisterScreen from './RegisterScreen'

const AuthNavigator = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        header: null,
        headerBackTitle: ''
      }
    },
    Agreement: {
      screen: AgreementScreen,
      navigationOptions: {
        title: '약관 동의',
        headerStyle: {
          backgroundColor: 'white'
        }
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: '회원 가입',
        headerStyle: {
          backgroundColor: 'white'
        }
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: '로그인',
        headerStyle: {
          backgroundColor: 'white'
        }
      }
    }
  },
  {}
)

export default AuthNavigator
