import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { colors } from '../../lib/styleUtils'

class NetworkDetailScreen extends React.Component {
  render () {
    const { gender, name, team } = this.props.navigation.getParam('item')
    // console.log(this.props.navigation.getParam("item"));
    // console.log(gender)

    return (
      <View style={styles.container}>
        <View>
          <Text> 이름 : {name} </Text>
          <Text> 성별 : {gender === 0 ? '남자' : '여자'}</Text>
          <Text> 소속 : {team}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default NetworkDetailScreen
