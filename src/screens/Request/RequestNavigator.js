import React from 'react'
import { StyleSheet, View } from 'react-native'
// import { Text } from '../../components/Base'
import { createStackNavigator } from 'react-navigation'
// import { RequestScreen } from './RequestScreen'
import { RequestScreen, RequestFormScreen } from './'

const RequestNavigator = createStackNavigator(
  {
    Request: {
      screen: RequestScreen,
      navigationOptions: {
        title: '신청서 작성'
      }
    },
    RequestForm: {
      screen: RequestFormScreen,
      navigationOptions: {
        title: '신청서 작성'
      }
    }
  },
  {}
)

export default RequestNavigator
