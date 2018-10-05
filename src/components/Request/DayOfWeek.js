import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { colors, customStyle } from '../../lib/styleUtils'

class DayOfWeek extends React.Component {
  render () {
    const { onPress, isSelected } = this.props

    const btnBgcMonday =
      (((isSelected >> 0) & 1) === 1) === true ? '#FF6E40' : colors.basicGray
    const btnBgcTuesday =
      (((isSelected >> 1) & 1) === 1) === true ? '#FF6E40' : colors.basicGray
    const btnBgcWednesday =
      (((isSelected >> 2) & 1) === 1) === true ? '#FF6E40' : colors.basicGray
    const btnBgcThursday =
      (((isSelected >> 3) & 1) === 1) === true ? '#FF6E40' : colors.basicGray
    const btnBgcFriday =
      (((isSelected >> 4) & 1) === 1) === true ? '#FF6E40' : colors.basicGray
    const btnBgcSaturday =
      (((isSelected >> 5) & 1) === 1) === true ? '#FF6E40' : colors.basicGray
    const btnBgcSunday =
      (((isSelected >> 6) & 1) === 1) === true ? '#FF6E40' : colors.basicGray

    return (
      <View style={styles.container}>
        <View style={styles.buttonDayOfWeek}>
          <TouchableOpacity
            style={[
              styles.selectedDayOfWeek,
              { backgroundColor: btnBgcMonday }
            ]}
            onPress={onPress('dayOfWeek', '0')}
          >
            <Text>월</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.selectedDayOfWeek,
              { backgroundColor: btnBgcTuesday }
            ]}
            onPress={onPress('dayOfWeek', '1')}
          >
            <Text>화</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectedDayOfWeek,
              { backgroundColor: btnBgcWednesday }
            ]}
            onPress={onPress('dayOfWeek', '2')}
          >
            <Text>수</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectedDayOfWeek,
              { backgroundColor: btnBgcThursday }
            ]}
            onPress={onPress('dayOfWeek', '3')}
          >
            <Text>목</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectedDayOfWeek,
              { backgroundColor: btnBgcFriday }
            ]}
            onPress={onPress('dayOfWeek', '4')}
          >
            <Text>금</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectedDayOfWeek,
              { backgroundColor: btnBgcSaturday }
            ]}
            onPress={onPress('dayOfWeek', '5')}
          >
            <Text>토</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectedDayOfWeek,
              { backgroundColor: btnBgcSunday }
            ]}
            onPress={onPress('dayOfWeek', '6')}
          >
            <Text>일</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  buttonDayOfWeek: {
    height: 50,
    backgroundColor: '#ffffff',
    ...customStyle.center,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30
  },
  selectedDayOfWeek: {
    width: 34,
    height: 34,
    backgroundColor: 'rgb(231, 231, 231)',
    borderRadius: 50,
    ...customStyle.center
  }
})

export default DayOfWeek
