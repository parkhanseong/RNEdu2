import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export const HeaderButton = ({ children, onPress, text }) => {
  return (
    <TouchableOpacity
      style={styles.touchableRect}
      activeOpacity={0.6}
      onPress={onPress}
    >
      {text === undefined ? null : <Text style={styles.text}>{text}</Text>}
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableRect: {
    marginRight: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18
  }
})

export default HeaderButton
