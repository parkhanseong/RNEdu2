import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../lib/styleUtils'
import { Icon } from 'react-native-elements'

class CheckBox extends React.Component {
  render () {
    const { children, onPress, style } = this.props
    return (
      <TouchableOpacity
        style={[styles.txtBoxAgree, { marginTop: 30 }]}
        onPress={onPress}
      >
        <View style={[styles.checkIcon, style]}>
          <Icon name='check' type='feather' size={18} color='white' />
        </View>
        <Text style={{ fontSize: 15, marginLeft: 30 }}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  txtBoxAgree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    height: 40
  },
  checkIcon: {
    position: 'absolute',
    width: 18,
    height: 18,
    left: 0,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CheckBox
