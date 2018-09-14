import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
// import { colors, customStyle, sizes } from '../../lib/utils'

export const ModalButton = ({ textColor = colors.text, onPress, children }) => {
  const textStyle = {
    color: textColor,
    fontSize: 15,
    fontWeight: sizes.semibold
  }
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginRight: 5,
    paddingHorizontal: 10,
    ...customStyle.center
  }
})

export default ModalButton
