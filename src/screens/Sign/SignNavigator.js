import React from 'react'
import { createStackNavigator } from "react-navigation";
import { SignScreen } from "../../screens/Sign";

const SignNavigator = createStackNavigator(
    {
        sign: {
            screen: SignScreen,
            navigationOptions: {
                title: "회원가입",
                headerBackTitle: "로그인"
            }
        },
    },
    {}
);

export default SignNavigator 