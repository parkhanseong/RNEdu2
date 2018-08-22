import React from "react";
import { createStackNavigator } from "react-navigation";
import { TextInputScreen, NextScreen } from "../../screens/TextInput";

const TextInputNavigator = createStackNavigator(
  {
    TextInput: {
      screen: TextInputScreen,
      navigationOptions: {
        title: "인풋",
        headerBackTitle: " "
      }
    },
    Next: {
      screen: NextScreen,
      navigationOptions: {
        title: "다음 화면"
      }
    }
  },
  {}
);

export default TextInputNavigator;
