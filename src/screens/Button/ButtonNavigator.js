import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, StackNavigator } from "react-navigation";
import { ButtonScreen, ButtonNextScreen } from "../../screens/Button";
import { SignNavigator } from "../../screens/Sign";
//import { colors } from '../../lib/styleUtils'

//const ButtonNavigator = createDrawerNavigator(
const ButtonNavigator = createStackNavigator(
    {
        Button: {
            screen: ButtonScreen,
            navigationOptions: {
                title: "프로필",
                headerBackTitle: "프로필 수정"
            }
        },
        ButtonNext: {
            screen: ButtonNextScreen,
            navigationOptions: {
            title: "다음 화면"
            }
        },
        // Sign: {
        //     screen: SignNavigator,
        //     navigationOptions: {
        //     title: "가입하기"
        //     }
        // }
    },
    {}
);
  

export default ButtonNavigator 