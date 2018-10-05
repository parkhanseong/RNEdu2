import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LoginScreen, LoginNavigator } from './src/screens/Login'
import { MainTab } from './src/screens/base'
import configureStore from './src/redux/configureStore'
import { Provider, connect } from 'react-redux'
import * as baseActions from './src/redux/modules/base'
import { LoadingView, ErrorModal } from './src/container/Base'
import { RootNavigator } from './src/screens/base'

const store = configureStore()
console.disableYellowBox = true
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <MainTab /> */}
        <RootNavigator />
        <LoadingView />
        {/* <ErrorModal /> */}
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  loadingStyle: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: 80,
    // width: 500
    // position: 'relative'
  }
})

export default App
