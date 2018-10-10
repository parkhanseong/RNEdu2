import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors, customStyle } from '../../lib/styleUtils'
import DatePicker from 'react-native-datepicker'
import { moment, getTimeText } from '../../lib/timeUtil'

class SelectTime extends React.Component {
  render () {
    const { startIndex, onPress } = this.props
    const initTime = moment()
      .hour(9)
      .minute(0)
      .format(TIME_FORMAT)
    const maxDate = moment()
      .hour(22)
      .minute(0)
      .format(TIME_FORMAT)

    var startHour = getTimeText(startIndex)

    return (
      <View style={styles.container}>
        <View style={styles.viewFromTime}>
          <Text>시작 시간</Text>
          <DatePicker
            style={{ width: 100, borderColor: '#FFFFFF' }}
            date={startHour}
            mode='time'
            placeholder='select date'
            format={TIME_FORMAT}
            minDate={initTime}
            maxDate={maxDate}
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

const TIME_FORMAT = 'A hh:mm'
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
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
