import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../lib/styleUtils'
import DatePicker from 'react-native-datepicker'
import { moment } from '../../lib/timeUtil'
class SelectDay extends React.Component {
  render () {
    const {
      onPress,
      data: { fromDate, pickTicket }
    } = this.props

    const initDate = moment()
      .add('2', 'd')
      .format('YYYY[년] MM[월] DD[일] (ddd)')

    return (
      <View style={styles.container}>
        <View style={styles.viewFormDate}>
          {pickTicket === 'L' ? <Text>시작 날짜</Text> : <Text>희망 날짜</Text>}
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
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22.5
  }
})

export default SelectDay
