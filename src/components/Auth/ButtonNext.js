import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { colors } from '../../lib/styleUtils'

class ButtonNext extends React.Component {
  render () {
    const { isValid, disabled, onPress, children } = this.props
    return (
      <TouchableOpacity
        style={[
          styles.btnVeriNext,
          { backgroundColor: isValid ? '#FF6E40' : 'rgb(231, 231, 231)' }
        ]}
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
    height: 70,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  footerTxt: {
    fontSize: 20,
    color: 'white'
  }
})

export default ButtonNext
