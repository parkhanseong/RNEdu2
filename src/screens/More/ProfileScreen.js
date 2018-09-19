import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../lib/styleUtils'

class ProfileScreen extends React.Component {
  render () {
    return
      <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default ProfileScreen
