import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import { TextScreen } from "../../screens/Text";
import { ImageScreen } from "../../screens/Image";
import { TextInputNavigator } from "../../screens/TextInput";
import { ButtonScreen } from "../../screens/Button";
import { colors } from "../../lib/styleUtils";

const MainTab = createBottomTabNavigator(
  {
    Text: {
      screen: TextScreen,
      navigationOptions: {
        tabBarLabel: "텍스트",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" type="ionicon" size={28} color={tintColor} />
        )
      }
    },
    Image: {
      screen: ImageScreen,
      navigationOptions: {
        tabBarLabel: "이미지",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="rainbow" type="entypo" size={28} color={tintColor} />
        )
      }
    },
    TextInput: {
      screen: TextInputNavigator,
      navigationOptions: {
        tabBarLabel: "인풋",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="aircraft" type="entypo" size={28} color={tintColor} />
        )
      }
    },
    Button: {
      screen: ButtonScreen,
      navigationOptions: {
        tabBarLabel: "버튼",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" type="entypo" size={28} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.main
    },
    swipeEnabled: false
  }
);

export default MainTab;
