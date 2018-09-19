import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { colors } from '../../lib/styleUtils'
import { Icon } from 'react-native-elements'

class Document extends React.Component {
  render () {
    const { onPress, children } = this.props

    return (
      <TouchableOpacity style={[styles.txtBoxAgree]} onPress={onPress}>
        <Text style={styles.txtAgree}>{children}</Text>
        <View
          style={{
            postion: 'absolute',
            right: 0
          }}
        >
          <Icon
            name='chevron-right'
            color='#d1d1d1'
            style={styles.rightArrow}
          />
        </View>
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
  txtAgree: {
    fontSize: 15,
    marginLeft: 30
  },
  rightArrow: {
    position: 'absolute'
  }
})

export default Document
