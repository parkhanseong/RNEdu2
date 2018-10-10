import React from 'react'
import { StyleSheet, View } from 'react-native'
// import { colors } from "../../lib/styleUtils";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button'
import { colors, customStyle } from '../../lib/styleUtils'

class SelectPeriodTime extends React.Component {
  render () {
    var radio_props = [
      { label: '2시간', value: 2 },
      { label: '3시간', value: 3 },
      { label: '4시간', value: 4 }
    ]

    const { hour, onPress } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.selectPeriodTime}>
          <RadioForm initial={0} formHorizontal>
            {radio_props.map((obj, i) => {
              return (
                <RadioButton style={{ marginTop: 10 }} animation key={i}>
                  <RadioButtonInput
                    labelHorizontal
                    obj={obj}
                    index={i}
                    isSelected={hour === obj.value}
                    onPress={value => {
                      onPress('hour', value)
                    }}
                    borderWidth={1}
                    buttonInnerColor={'#FF6E40'}
                    buttonOuterColor={hour === i + 2 ? colors.main : '#d1d1d1'}
                    buttonSize={10}
                    buttonOuterSize={20}
                    buttonWrapStyle={{ marginLeft: 10 }}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal
                    onPress={value => {
                      onPress('hour', value)
                    }}
                    labelStyle={{ fontSize: 15 }}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              )
            })}
          </RadioForm>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff'
  },
  selectPeriodTime: {
    ...customStyle.center,
    height: 50
  }
})

export default SelectPeriodTime
