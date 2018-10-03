import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../lib/styleUtils'
import DatePicker from 'react-native-datepicker'

class SelectTime extends React.Component {
  render () {
    const { initTime, fromTime, onPress } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.viewFromTime}>
          <Text>시작 시간</Text>
          <DatePicker
            style={{ width: 100, borderColor: '#FFFFFF' }}
            date={fromTime}
            mode='time'
            placeholder='select date'
            format='A hh:mm'
            minDate={initTime}
            maxDate='24:00'
            minuteInterval={30}
            confirmBtnText='확인'
            cancelBtnText='취소'
            showIcon={false}
            onDateChange={onPress('fromTime')}
            customStyles={{
              dateInput: {
                borderWidth: 0,
                alignItems: 'flex-end'
              }
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.background
    backgroundColor: '#ffffff'
  },
  viewFromTime: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 22.5
  }
})

export default SelectTime
