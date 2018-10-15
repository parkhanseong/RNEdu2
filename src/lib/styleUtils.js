import { View, Platform, Dimensions } from 'react-native'

export const colors = {
  main: '#F25130',
  text: '#2d2d2d',
  background: '#f4f4f4',
  basicGray: '#e7e7e7',
  border: '#2d2d2d',
  grayText: '#b3b3b3',
  grayText2: '#d1d1d1',
  grayBorder: '#e7e7e7'
}

export const customStyle = {
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height
export const screenRatio = screenWidth / 375
export const isSE = screenWidth < 330
export const isX = screenHeight == 812
