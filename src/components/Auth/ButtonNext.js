import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { colors, screenHeight, isX } from '../../lib/styleUtils'

class ButtonNext extends React.Component {
  // onPress = () => {
  //   this.props.navigation.navigate("Request");
  // };

  render () {
    const { isValid, disabled, onPress, children } = this.props

    return (
      <TouchableOpacity
        style={[styles.btnVeriNext, { backgroundColor: '#FF6E40' }]}
        disabled={!disabled}
        onPress={onPress}
      >
        <Text style={styles.footerTxt}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  btnVeriNext: {
    width: '100%',
    height: isX ? 55 : 47,
    bottom: isX ? 0 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  footerTxt: {
    fontSize: 18,
    color: 'white'
  }
})

export default ButtonNext
