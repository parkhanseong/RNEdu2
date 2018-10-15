import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { colors, customStyle, isSE } from '../../lib/styleUtils'

const DAY_ARRAT = ['일', '월', '화', '수', '목', '금', '토']

const DayButton = ({ onPress, index, selected }) => {
  const backgrounStyle = {
    backgroundColor: selected ? '#FF6E40' : colors.basicGray
  }

  return (
    <TouchableOpacity
      style={[styles.selectedDayOfWeek, backgrounStyle]}
      onPress={onPress('dayOfWeek', String(index))}
    >
      <Text style={styles.txtDay}>{DAY_ARRAT[index]}</Text>
    </TouchableOpacity>
  )
}

class DayOfWeek extends React.Component {
  render () {
    const { onPress, isSelected } = this.props

    const dayList = DAY_ARRAT.map((item, index) => {
      const selected = ((isSelected >> index) & 1) === 1
      return (
        <DayButton
          onPress={onPress}
          index={index}
          selected={selected}
          key={index}
        />
      )
    })

    return (
      <View>
        <View style={styles.viewPlayTicket}>
          <Text style={styles.txtPlayTicket}>희망 요일</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonDayOfWeek}>{dayList}</View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background
  },
  viewPlayTicket: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder
  },
  buttonDayOfWeek: {
    ...customStyle.center,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10
  },
  txtPlayTicket: {
    marginLeft: 22.5,
    fontSize: isSE ? 14 : 15
  },
  selectedDayOfWeek: {
    width: isSE ? 32 : 34,
    height: isSE ? 32 : 34,
    backgroundColor: colors.grayBorder,
    borderRadius: 50,
    ...customStyle.center
  },
  txtDay: {
    color: 'white'
  }
})

export default DayOfWeek
