import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../lib/styleUtils'
import { connect } from 'react-redux'
import { List, Map } from 'immutable'
import { bindActionCreators } from 'redux'
import * as signActions from '../../redux/modules/sign'

class TextScreen extends React.Component {
  render () {
    const laText = 'Last text'
    const {
      name,
      phone,
      pwd,
      pwdConfirm,
      nameValid,
      phoneValid,
      pwdValid,
      pwdConfirmValid
    } = this.props

    return (
      <View style={[styles.container, { paddingVertical: 50 }]}>
        <Text>
          {' '}
          이름: {name} 유효성 : {nameValid ? 'true' : 'false'}{' '}
        </Text>
        <Text>
          {' '}
          폰번호: {phone} 유효성 : {phoneValid ? 'true' : 'false'}{' '}
        </Text>
        <Text>
          {' '}
          비번: {pwd} 유효성 : {pwdValid ? 'true' : 'false'}{' '}
        </Text>
        <Text>
          {' '}
          비번확인: {pwdConfirm} 유효성 : {pwdConfirmValid ? 'true' : 'false'}{' '}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20
  }
})

export default connect(
  state => ({
    name: state.sign.getIn(['name', 'value']),
    nameValid: state.sign.getIn(['name', 'isValid']),
    phone: state.sign.getIn(['phone', 'value']),
    phoneValid: state.sign.getIn(['phone', 'isValid']),
    pwd: state.sign.getIn(['pwd', 'value']),
    pwdValid: state.sign.getIn(['pwd', 'isValid']),
    pwdConfirm: state.sign.getIn(['pwdConfirm', 'value']),
    pwdConfirmValid: state.sign.getIn(['pwdConfirm', 'isValid'])
  }),
  dispatch => ({
    signActions: bindActionCreators(signActions, dispatch)
  })
)(TextScreen)

// export default TextScreen
