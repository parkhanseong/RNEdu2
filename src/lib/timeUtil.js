export const moment = require('moment')

moment.locale('ko', {
  months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
  monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
  weekdays: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  ],
  weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
  longDateFormat: {
    L: 'YYYY.MM.DD',
    LL: 'YYYY년 MMMM D일',
    LLL: 'YYYY년 MMMM D일 A h시 mm분',
    LLLL: 'YYYY년 MMMM D일 dddd A h시 mm분'
  },
  meridiem: {
    AM: '오전',
    am: '오전',
    PM: '오후',
    pm: '오후'
  },
  relativeTime: {
    future: '%s 후',
    past: '%s 전',
    s: '몇초',
    ss: '%d초',
    m: '일분',
    mm: '%d분',
    h: '한시간',
    hh: '%d시간',
    d: '하루',
    dd: '%d일',
    M: '한달',
    MM: '%d달',
    y: '일년',
    yy: '%d년'
  },
  ordinal: function (number) {
    return '일'
  }
})

moment.defineLocale('ko', {
  meridiem: hour => {
    if (hour < 12) return '오전'
    else return '오후'
  },
  meridiemParse: /오전|오후/,
  isPM: function (input) {
    return input.includes('오후')
  }
})
