import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { TextScreen } from '../../screens/Text'
import { ImageScreen } from '../../screens/Image'
// import { ImageScreen } from '../../screens/Image'
//import { TextInputScreen } from '../../screens/TextInput'
import { ButtonScreen, ButtonNextScreen, ButtonNavigator } from '../../screens/Button'
import { NetworkNavigator  } from '../../screens/Network'
// import { LoginNavigator } from '../../screens/Login_'
import { colors } from '../../lib/styleUtils';

const MainTab = createBottomTabNavigator({
    Network: {
        screen: NetworkNavigator,
        navigationOptions: {
            tabBarLabel: 'Network',
            tabBarIcon: ({tintColor}) => (
                <Icon name="user" type="feather" size={28} color={tintColor}/>
            )
        }
    },
    Text: {
        screen: TextScreen,
        navigationOptions: {
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({tintColor}) => (
                <Icon name="search" type="evilicons" size={28} color={tintColor}/>
            )
        }
    },
    Image: {
        screen: ImageScreen,
        navigationOptions: {
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({tintColor}) => (
                <Icon name="rainbow" type="entypo" size={28} color={tintColor}/>
            )
        }
    },
    Button: {
        screen: ButtonNavigator,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({tintColor}) => (
                <Icon name="user" type="feather" size={28} color={tintColor}/>
            )
        }
    },
    
    // ButtonNext: {
    //     screen: ButtonNextScreen,
    //     navigationOptions: {
    //         tabBarLabel: '버튼--',
    //         tabBarIcon: ({tintColor}) => (
    //             <Icon name="camera" type="entypo" size={28} color={tintColor}/>
    //         )
    //     }
    // },

}, 
{
    tabBarOptions: {
        activeTintColor: colors.main,
        style: {
            backgroundColor: 'white',
            borderWidth: 1,
        },
        tabStyle: {
            borderTopWidth: 0.5,
        }
    },
    swipeEnabled:false
})


//Tabar 숨김 처리
// const hideTabBar = {
//     return tabBarVisible
// }

//ButtonNavigator.navi~ = hidebar;


export default MainTab