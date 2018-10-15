import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { colors, customStyle, isSE } from '../../lib/styleUtils'

class RequestTicket extends React.Component {
  render () {
    const { isSelected, onPress } = this.props

    const pickColor_L = isSelected === 'L' ? '#FF6E40' : '#b3b3b3'
    const pickColor_S = isSelected === 'S' ? '#FF6E40' : '#b3b3b3'

    return (
      <View style={styles.container}>
        <View style={[styles.parentViewPlayTicket]}>
          <View style={styles.viewPlayTicket}>
            <Text style={styles.txtPlayTicket}>놀이 이용권</Text>
          </View>
          <View style={styles.viewBtnOption}>
            <TouchableOpacity
              style={[styles.btnOption, { borderColor: pickColor_L }]}
              onPress={onPress('pickTicket', 'L')}
            >
              <Text style={[styles.txtServiceTitle, { color: pickColor_L }]}>
                정기권
              </Text>
              <Text style={[styles.txtServiceSubTitle, { color: pickColor_L }]}>
                정기적으로 놀이 진행
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnOption, { borderColor: pickColor_S }]}
              onPress={onPress('pickTicket', 'S')}
            >
              <Text style={[styles.txtServiceTitle, { color: pickColor_S }]}>
                단발권
              </Text>
              <Text style={[styles.txtServiceSubTitle, { color: pickColor_S }]}>
                하루만 놀이 진행
              </Text>
            </TouchableOpacity>
          </View>
          {isSelected === 'L' ? (
            <View style={{ marginLeft: 22.5 }}>
              <Text style={styles.notiTicket}>
                ∙ 정기권 놀이는 4주 단위로 계약됩니다.
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingBottom: 10
  },
  parentViewPlayTicket: {
    backgroundColor: 'white',
    paddingVertical: 10
  },
  viewPlayTicket: {
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder
  },
  txtPlayTicket: {
    marginLeft: 22.5,
    fontSize: isSE ? 14 : 15
  },
  notiTicket: {
    color: '#FF6E40',
    fontSize: isSE ? 10 : 11
  },
  viewBtnOption: {
    flexDirection: 'row',
    ...customStyle.center,
    justifyContent: 'space-around',
    marginTop: 10
  },
  btnOption: {
    ...customStyle.center,
    width: 135,
    height: 49,
    borderWidth: 1,
    marginVertical: 10
  },
  txtServiceTitle: {
    fontSize: isSE ? 14 : 15
  },
  txtServiceSubTitle: {
    fontSize: isSE ? 10 : 11
  }
})

export default RequestTicket
