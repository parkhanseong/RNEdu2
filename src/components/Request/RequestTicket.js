import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { colors, customStyle } from '../../lib/styleUtils'

class RequestTicket extends React.Component {
  render () {
    const { isSelected, onPress } = this.props

    const pickColor_L = isSelected === 'L' ? '#FF6E40' : '#000000'
    const pickColor_S = isSelected === 'S' ? '#FF6E40' : '#000000'

    return (
      <View style={styles.container}>
        <View
          style={[
            styles.parentViewPlayTicket,
            { height: isSelected === 'L' ? 152 : 135 }
          ]}
        >
          <View style={styles.viewPlayTicket}>
            <Text style={styles.txtPlayTicket}>놀이 이용권</Text>
          </View>
          <View style={styles.grayLine} />
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
              <Text style={{ color: '#FF6E40' }}>
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
    backgroundColor: colors.background
  },
  parentViewPlayTicket: {
    backgroundColor: '#ffffff'
  },
  viewPlayTicket: {
    height: 45,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  txtPlayTicket: {
    marginLeft: 22.5,
    fontSize: 15
  },
  grayLine: {
    height: 2,
    backgroundColor: '#f4f4f4'
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
    fontSize: 15
  },
  txtServiceSubTitle: {
    fontSize: 11
  }
})

export default RequestTicket
