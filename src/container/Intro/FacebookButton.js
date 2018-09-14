import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Alert
} from 'react-native'
import { colors } from '../../lib/styleUtils'

class FacebookButton extends React.Component {
  render () {
    return (
      <View style={{ marginTop: 9 }}>
        <TouchableOpacity style={styles.buttonFacebook}>
          <View style={styles.imageWrapper}>
            <Image source={require('../../images/loginFacebook.png')} />
          </View>
          <Text
            style={styles.buttonTextFacebook}
            onPress={() => {
              Alert.alert('facebook Login')
            }}
          >
            페이스북 계정으로 로그인
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  buttonFacebook: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1369b1',
    flexDirection: 'row',
    borderRadius: 50
  },
  imageWrapper: {
    width: 30,
    alignItems: 'center'
  },
  buttonTextFacebook: {
    width: 130,
    fontSize: 11,
    textAlign: 'center',
    color: 'white'
  },
  logo: {
    width: 25,
    height: 22
  }
})

export default FacebookButton
