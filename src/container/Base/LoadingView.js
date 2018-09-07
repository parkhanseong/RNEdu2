import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  AppRegistry,
  Dimensions
} from 'react-native'
import { colors } from '../../lib/styleUtils'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from '../../redux/modules/base'

class LoadingView extends React.Component {
  render () {
    const { load } = this.props

    return load === true || load !== false ? (
      <View style={styles.container}>
        <View style={styles.activityIndicator}>
          <ActivityIndicator size='large' color='#FF6E40' animating='true' />
          <Text style={styles.txtStyle}>Loading ...</Text>
        </View>
      </View>
    ) : null
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  txtStyle: {
    fontSize: 40,
    color: '#FFFFFF'
  },
  loadingImg: {
    backgroundColor: 'yellow',
    width: 200,
    height: 200
  }
})

// export default LoadingView
export default connect(
  state => ({
    load: state.base.get('loading')
  }),
  null
)(LoadingView)
