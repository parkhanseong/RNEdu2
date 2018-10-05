import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native'
import { colors } from '../../lib/styleUtils'

const numberWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

class EstimatedAmount extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      anim: {
        yValue: new Animated.Value(0)
      },
      menu_expanded: false
    }
  }

  openMenu () {
    this.setState(
      {
        menu_expanded: true
      },
      () => {
        this.state.anim.yValue.setValue(0)
        Animated.spring(this.state.anim.yValue, {
          toValue: 1,
          friction: 3
        }).start()
      }
    )
  }

  hideMenu () {
    this.setState(
      {
        menu_expanded: false
      },
      () => {
        this.state.anim.yValue.setValue(1)
        Animated.spring(this.state.anim.yValue, {
          toValue: 0,
          friction: 4
        }).start()
      }
    )
  }

  render () {
    const { normalAmount, excellentAmount, proAmount } = this.props.data
    const { openMenu, hideMenu } = this
    const { menu_expanded } = this.state

    const moveY = this.state.anim.yValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -150]
    })

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.viewBottom,
            {
              transform: [
                {
                  translateY: moveY
                }
              ]
            }
          ]}
        >
          {menu_expanded === false ? (
            <TouchableOpacity
              onPress={openMenu.bind(this)}
              style={styles.viewEstimatedAmount_top}
            >
              <View style={styles.btnTopOfAmount}>
                <Text>예상 금액</Text>
                <Image source={require('../../images/down.png')} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={hideMenu.bind(this)}
              style={styles.viewEstimatedAmount_top}
            >
              <View style={styles.btnTopOfAmount}>
                <Text>예상 금액</Text>
                <Image source={require('../../images/downCopy.png')} />
              </View>
            </TouchableOpacity>
          )}
          <View style={styles.grayLine} />
          <View style={styles.viewEstimatedAmount}>
            <Text>일반 시터</Text>
            <Text style={styles.txtAmount}>
              {numberWithCommas(normalAmount)} 원
            </Text>
          </View>
          <View style={styles.viewEstimatedAmount}>
            <Text>우수 시터</Text>
            <Text style={styles.txtAmount}>
              {numberWithCommas(excellentAmount)} 원
            </Text>
          </View>
          <View style={styles.viewEstimatedAmount}>
            <Text>전문 시터</Text>
            <Text style={styles.txtAmount}>
              {numberWithCommas(proAmount)} 원
            </Text>
          </View>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: -50
  },
  viewBottom: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#FF6E40',
    borderWidth: 1
  },
  btnTopOfAmount: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 22.5
  },
  viewEstimatedAmount_top: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff'
  },
  viewEstimatedAmount: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 22.5
  },
  grayLine: {
    height: 2,
    backgroundColor: 'rgb(244, 244, 244)'
  },
  txtAmount: {
    color: '#FF6E40'
  }
})

export default EstimatedAmount
