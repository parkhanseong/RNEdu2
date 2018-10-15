/**
 * 금액을 세 자리 마다 ','(콤마)를 추가하여 포매팅 처리를 해준다.
 *
 * ex) numberWithCommas(999999)
 *
 * @param num 금액
 * @return 999,999
 */
export const numberWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 요일 선택에 따른 비트 연산값을 받아 선택된 요일 수 계산
 *
 * ex) convertDayToCount(1001001)
 *
 * @param value
 * @return 3
 */
export const convertDayToCount = value => {
  var countDayOfWeek = value.toString(2).match(/1/g || [])
  var count = countDayOfWeek !== null ? countDayOfWeek.length : 0
  return count
}

/**
 * 요일 선택에 따른 Number를 받아 요일 반환
 *
 * ex) converDayToStringDay(64)
 *
 * @param value Number type
 * @return 월, 화
 */
export const converDayToStringDay = value => {
  const dayArr = ['월', '화', '수', '목', '금', '토', '일']
  var strArray = []
  var daysArr = []
  var strDayOfWeek = value.toString(2).toString()

  // 2진수 배열에 담기
  for (var i = strDayOfWeek.length; i > 0; i--) {
    strArray.push(strDayOfWeek.substring(i, i - 1))
  }
  // 2진수 요일로 변환
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === '1') {
      daysArr.push(dayArr[i])
    }
  }

  return daysArr.join(', ')
}

/**
 * 이용권 금액 계산
 *
 * ex) handleEstimatedAmount(L, 1001001, 3)
 *
 * @param (value1, value2, value3)
 * @return 54000
 */
export const handleEstimatedAmount = (pickTicket, mDayOfWeek, hour) => {
  // 가격 산정에 필요한 값 ( 정기권/단발권(pickTicket), 요일(mDayOfWeek), 시간(hour)
  var dayCount = convertDayToCount(mDayOfWeek)
  var { normalAmount, excellentAmount, proAmount } = 0
  var calcul_L = dayCount * hour
  var calcul_S = hour
  var priceArr = []
  // 정기권(L) - 일반(A), 우수(B), 전문(C)
  var typeL_A = 4 * 11000
  var typeL_B = 4 * 14500
  var typeL_C = 4 * 17500
  // 단발권(S) - 일반(A), 우수(B), 전문(C)
  var typeS_A = 13500
  var typeS_B = 17500
  var typeS_C = 21000

  if (pickTicket === 'L') {
    normalAmount = typeL_A * calcul_L
    excellentAmount = typeL_B * calcul_L
    proAmount = typeL_C * calcul_L
  } else {
    normalAmount = typeS_A * calcul_S
    excellentAmount = typeS_B * calcul_S
    proAmount = typeS_C * calcul_S
  }

  priceArr = [normalAmount, excellentAmount, proAmount]

  return priceArr
}
