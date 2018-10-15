import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform
} from 'react-native'
import { colors, isSE, isX } from '../../lib/styleUtils'
import { numberWithCommas } from '../../lib/proposalUtils'
import { handleEstimatedAmount } from '../../lib/proposalUtils'

const PRICE_CELL = 45
const TICKET_NAME_ARRAY = ['일반 시터', '우수 시터', '전문 시터']
const PriceView = ({ index, priceArr }) => {
  return (
    <View style={styles.viewEstimatedAmount}>
      <Text>{TICKET_NAME_ARRAY[index]}</Text>
      <Text style={styles.txtAmount}>
        {numberWithCommas(priceArr[index])} 원
      </Text>
    </View>
  )
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

  handleOpenMenu () {
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

  handleHideMenu () {
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
    var { pickTicket, mDayOfWeek, hour } = this.props.data
    const { handleOpenMenu, handleHideMenu } = this
    const { menu_expanded } = this.state

    var priceArr = handleEstimatedAmount(pickTicket, mDayOfWeek, hour)

    const moveY = this.state.anim.yValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, PRICE_CELL * -3]
    })

    const priceList = TICKET_NAME_ARRAY.map((item, index) => {
      return <PriceView index={index} priceArr={priceArr} key={index} />
    })

    return (
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
        <View style={[styles.childrenAnim]}>
          <TouchableOpacity
            onPress={
              menu_expanded === false
                ? handleOpenMenu.bind(this)
                : handleHideMenu.bind(this)
            }
            style={styles.viewEstimatedAmount_top}
          >
            <Text>예상 금액</Text>
            {menu_expanded === false ? (
              <Image source={require('../../images/down.png')} />
            ) : (
              <Image source={require('../../images/downCopy.png')} />
            )}
          </TouchableOpacity>
          {priceList}
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  viewBottom: {
    flex: 1,
    bottom: isX ? PRICE_CELL * -3.8 : PRICE_CELL * -2
  },
  childrenAnim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: isX ? PRICE_CELL * 2 : 0,
    borderBottomColor: 'white',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#FF6E40'
  },
  viewEstimatedAmount_top: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: PRICE_CELL,
    backgroundColor: 'white',
    paddingHorizontal: 22.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder
  },
  viewEstimatedAmount: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: PRICE_CELL,
    paddingHorizontal: 22.5
  },
  txtAmount: {
    color: '#FF6E40'
  },
  grayLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder
  }
})

export default EstimatedAmount
