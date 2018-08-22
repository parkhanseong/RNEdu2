import React from "react";
import { StyleSheet, View } from "react-native";
import { TextScreen } from "./src/screens/Text";
import { ButtonScreen } from "./src/screens/Button";
import { ImageScreen } from "./src/screens/Image";
import { TextInputScreen } from "./src/screens/TextInput";
import { MainTab } from "./src/screens/Base";
import configureStore from "./src/redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <MainTab />
    </Provider>
  );
  return;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

export default App;
