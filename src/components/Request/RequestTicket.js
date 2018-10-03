import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { colors, customStyle } from '../../lib/styleUtils'

class RequestTicket extends React.Component {
  render () {
    const { isSelected, onPress } = this.props

    console.log('isSelected >>> ')
    console.log(isSelected)

    const pickColor_L = isSelected.value === 'L' ? '#FF6E40' : '#000000'
    const pickColor_S = isSelected.value === 'S' ? '#FF6E40' : '#000000'

    return (
      <View style={styles.container}>
        <View style={styles.parentViewPlayTicket}>
          <View style={styles.viewPlayTicket}>
            <Text style={styles.txtPlayTicket}>놀이 이용권</Text>
          </View>
          <View style={styles.grayLine} />

          <View style={styles.viewBtnOption}>
            <TouchableOpacity
              style={[styles.btnOption, { borderColor: pickColor_L }]}
              onPress={onPress('season')}
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
              onPress={onPress('single')}
            >
              <Text style={[styles.txtServiceTitle, { color: pickColor_S }]}>
                단발권
              </Text>
              <Text style={[styles.txtServiceSubTitle, { color: pickColor_S }]}>
                하루만 놀이 진행
              </Text>
            </TouchableOpacity>
          </View>

          {isSelected.value === 'L' ? (
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
    height: 152,
    backgroundColor: 'rgb(255, 255, 255)'
  },
  viewPlayTicket: {
    height: 45,
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 255, 255)'
  },
  txtPlayTicket: {
    marginLeft: 22.5,
    fontSize: 15
  },
  grayLine: {
    height: 2,
    backgroundColor: 'rgb(244, 244, 244)'
  },
  viewBtnOption: {
    flexDirection: 'row',
    ...customStyle.center,
    justifyContent: 'space-around'
  },
  btnOption: {
    // flexDirection: "row",
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
