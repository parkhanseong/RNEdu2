import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert
} from 'react-native'
import { colors } from '../../lib/styleUtils'

class KakaoButton extends React.Component {
  render () {
    return (
      <View>
        <TouchableOpacity
          style={styles.buttonKakao}
          onPress={() => {
            Alert.alert('kakao Login')
          }}
          activeOpacity={0.8}
        >
          <View style={styles.imageWrapper}>
            <Image
              style={styles.logo}
              source={require('../../images/kakao.png')}
            />
          </View>
          <Text style={styles.buttonTextKakao}>카카오 계정으로 로그인</Text>
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
  buttonKakao: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe253',
    flexDirection: 'row',
    borderRadius: 50
  },
  imageWrapper: {
    width: 30,
    alignItems: 'center'
  },
  buttonTextKakao: {
    width: 130,
    fontSize: 11,
    textAlign: 'center',
    color: '#3A1E1E',
    borderRadius: 50
  },
  logo: {
    width: 22,
    height: 21
  }
})

export default KakaoButton
