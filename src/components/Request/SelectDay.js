import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../lib/styleUtils'
import DatePicker from 'react-native-datepicker'

class SelectDay extends React.Component {
  render () {
    const { onPress, fromDate, initDate } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.viewFormDate}>
          <Text>시작 날짜</Text>
          <DatePicker
            style={{ width: 140 }}
            date={fromDate}
            mode='date'
            placeholder='select date'
            format='YYYY년 MM월 DD일 (ddd)'
            minDate={initDate}
            confirmBtnText='확인'
            cancelBtnText='취소'
            showIcon={false}
            customStyles={{
              dateInput: { borderWidth: 0, alignItems: 'flex-end' }
            }}
            onDateChange={onPress('fromDate')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  viewFormDate: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22.5
  }
})

export default SelectDay
