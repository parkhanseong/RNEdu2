import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LoginScreen, LoginNavigator } from './src/screens/Login';
import { MainTab } from './src/screens/base';
import configureStore from "./src/redux/configureStore";
import { Provider } from "react-redux";


const store = configureStore();
console.disableYellowBox = true;
const App = () => {
    
    return (
      <Provider store={store}>
        <MainTab/>
      </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})

export default App