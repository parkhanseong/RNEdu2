import React from 'react'
// import { createStackNavigator } from 'react-navigation';
import { LoginScreen } from '../../screens/Login'
import { SignNavigator } from '../../screens/Sign'
// import { SignScreen } from '../../screens/Sign';
import { MainTab } from '../../screens/base'

import {
  createStackNavigator,
  StackNavigator,
  createSwitchNavigator
} from 'react-navigation'

// const LoginNavigator = createStackNavigator({

//     Login: {
//         screen : LoginScreen,
//         navigationOptions: {
//             title: "로그인",
//             headerBackTitle: " "
//         }
//     },
//     MainTab: {
//         screen : MainTab,
//         navigationOptions: {
//             title: "다음화면"
//         }
//     }
// },
// {

// })

// export default LoginNavigator

// const AuthStack = StackNavigator({ SignIn: LoginScreen });
// const AppStack = StackNavigator({ HomeScreen: MainTab });

// export default createSwitchNavigator(
//     {
//       App: AuthStack,
//       Auth: AppStack
//     },
//     // {
//     //   initialRouteName: 'AuthLoading',
//     // }
//   );
const RootNavigator = createSwitchNavigator(
  {
    Main: {
      screen: MainTab,
      key: 'Main',
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignNavigator,
      key: 'Main',
      navigationOptions: {
        header: null
      }
    }
  }
  // {
  //     Load: {
  //         screen: LoadScreen,
  //         navigationOptions: {
  //             header: null
  //         }
  //     },
  //     Introduce: {
  //         screen: IntroduceScreen,
  //         navigationOptions: {
  //             header: null
  //         }
  //     },
  //     Permission: {
  //         screen: PermissionScreen,
  //         navigationOptions: {
  //             header: null
  //         }
  //     },
  //     Auth: {
  //         screen: Auth,
  //         navigationOptions: {
  //             header: null,
  //             headerBackTitle: '로그인',
  //         }
  //     },
  //     Main: {
  //         screen: MainTab,
  //         key: 'Main',
  //         navigationOptions: {
  //             header: null,
  //         }
  //     }
  // },
  // {
  //     ...customStyle.headerStyle
  // }
)

export default RootNavigator
