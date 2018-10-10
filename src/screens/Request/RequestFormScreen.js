import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Button,
  Alert,
  ScrollView
} from "react-native";
import { colors, customStyle } from "../../lib/styleUtils";
import { ButtonNext } from "../../components/Auth";
import {
  RequestTicket,
  DayOfWeek,
  SelectDay,
  SelectTime,
  SelectPeriodTime,
  EstimatedAmount
} from "../../components/Request";
import { moment, convertToIndex, getTimeString } from "../../lib/timeUtil";
import * as requestActions from "../../redux/modules/request";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  convertDayToCount,
  converDayToStringDay,
  handleEstimatedAmount
} from "../../lib/proposalUtils";

class RequestFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickTicket: "L",
      mDayOfWeek: 0,
      fromDate: moment().add(2, "d"),
      startIndex: 0,
      hour: 2
    };
  }

  componentDidMount() {
    var { reqeustTicketInfo } = this.props;

    reqeustTicketInfo =
      reqeustTicketInfo === undefined ? undefined : reqeustTicketInfo.toJS();

    if (reqeustTicketInfo != undefined) {
      this.setState({
        ...this.state,
        pickTicket: reqeustTicketInfo.pickTicket,
        mDayOfWeek: reqeustTicketInfo.mDayOfWeek,
        daysArr: reqeustTicketInfo.daysArr,
        fromDate: reqeustTicketInfo.fromDate,
        startIndex: reqeustTicketInfo.startIndex,
        hour: reqeustTicketInfo.hour
      });
    }
  }

  handleDayOfWeek = (type, day) => () => {
    var { mDayOfWeek, pickTicket, hour } = this.state;
    var isSelected = 1;
    if (((mDayOfWeek >> day) & 1) === 1) {
      isSelected = 0;
    }

    var _mDayOfWeek =
      isSelected === 1 ? (mDayOfWeek |= 1 << day) : (mDayOfWeek &= ~(1 << day));
    var count = convertDayToCount(mDayOfWeek);

    if (count > 3) {
      Alert.alert("", "요일은 최대 3일까지만 가능합니다.");
      return false;
    }

    this.setState({
      ...this.state,
      mDayOfWeek: _mDayOfWeek
    });
  };

  _onPressPickTicket = (type, value) => () => {
    this.setState({
      ...this.state,
      [type]: value
    });
  };

  onPeriodTimeChange = (type, hour) => {
    this.setState({
      ...this.state,
      hour: hour
    });
  };

  onDateChange = type => date => {
    var startIndex = convertToIndex(date, "A hh:mm");
    const { hour } = this.state;

    var FORMAT = "";
    switch (type) {
      case "fromDate":
        FORMAT = "YYYY년 MM월 DD일 (ddd)";
        break;
      case "fromTime":
        FORMAT = "A hh:mm";
        break;
      default:
        break;
    }

    if (type === "fromDate") {
      this.setState({
        ...this.state,
        [type]: moment(date, FORMAT)
      });
    } else {
      this.setState({
        ...this.state,
        startIndex: startIndex,
        hour: hour
      });
    }
  };

  _onPressRequestService = () => {
    const { pickTicket, mDayOfWeek, fromDate, startIndex, hour } = this.state;

    //Number 요일 > String 요일로 변환
    var daysArr = converDayToStringDay(mDayOfWeek);
    var dayCount = convertDayToCount(mDayOfWeek);
    const data = {
      pickTicket: pickTicket,
      mDayOfWeek: mDayOfWeek,
      daysArr: daysArr,
      fromDate: fromDate,
      startIndex: startIndex,
      hour: hour
    };

    const { requestActions } = this.props;
    requestActions.setRequestTicketInfo(data);

    if (dayCount === 0 && pickTicket === "L") {
      Alert.alert("", "희망 요일을 선택해주세요.");
      return;
    }

    Alert.alert("완료", "지원받기가 정상적으로 완료 되었습니다.", [
      {
        text: "확인",
        onPress: () => {
          this.props.navigation.navigate("Request", { data: data });
        }
      }
    ]);
  };

  render() {
    const {
      _onPress,
      _onPressPickTicket,
      onDateChange,
      onPressInfoChange,
      onPeriodTimeChange,
      handleDayOfWeek,
      _onPressRequestService
    } = this;
    const { startIndex, hour, pickTicket, fromDate, mDayOfWeek } = this.state;

    return (
      <View style={styles.container}>
        {/* 이용권 선택 */}
        <RequestTicket isSelected={pickTicket} onPress={_onPressPickTicket} />

        {pickTicket === "L" ? (
          <View style={[styles.viewTimeRequest, { height: 256 }]}>
            <View style={styles.viewPlayTicket}>
              <Text style={styles.txtPlayTicket}>희망 요일</Text>
            </View>
            <View style={styles.grayLine} />
            <View style={[styles.viewSelectDayTime, { height: 100 }]}>
              {/* 요일 선택 */}
              <DayOfWeek onPress={handleDayOfWeek} isSelected={mDayOfWeek} />
              {/* 시작 날짜 선택 */}
              <SelectDay
                data={{ fromDate, pickTicket }}
                onPress={onDateChange}
              />
            </View>
            <View style={styles.grayLine} />
            {/* 시작 시간 선택 */}
            <SelectTime onPress={onDateChange} startIndex={startIndex} />
            <View style={styles.grayLine} />
            {/* 이용 시간 선택 */}
            <SelectPeriodTime hour={hour} onPress={onPeriodTimeChange} />
          </View>
        ) : (
          <View style={[styles.viewTimeRequest, { height: 160 }]}>
            <SelectDay data={{ fromDate, pickTicket }} onPress={onDateChange} />
            {/* 시작 시간 선택 */}
            <View style={styles.grayLine} />
            <SelectTime onPress={onDateChange} startIndex={startIndex} />
            <View style={styles.grayLine} />
            {/* 이용 시간 선택 */}
            <SelectPeriodTime hour={hour} onPress={onPeriodTimeChange} />
          </View>
        )}

        <View style={styles.txtResultPeriod}>
          <Text>{getTimeString(startIndex, hour)}</Text>
        </View>

        <EstimatedAmount data={{ pickTicket, hour, mDayOfWeek }} />
        <ButtonNext onPress={_onPressRequestService} disabled={true}>
          지원받기
        </ButtonNext>
      </View>
    );
  }
}

const TIME_FORMAT = "A hh:mm";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  grayLine: {
    height: 2,
    backgroundColor: colors.background
  },
  txtServiceSubTitle: {
    fontSize: 11
  },
  viewPlayTicket: {
    height: 45,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  txtPlayTicket: {
    marginLeft: 22.5,
    fontSize: 15
  },
  viewTimeRequest: {
    backgroundColor: "#ffffff",
    marginTop: 10
  },
  viewSelectDayTime: {},
  txtResultPeriod: {
    ...customStyle.center,
    height: 40
  },
  radioView: {
    marginTop: 15
  }
});

export default connect(
  state => ({
    reqeustTicketInfo: state.request.get("reqeustTicketInfo")
  }),
  dispatch => ({
    requestActions: bindActionCreators(requestActions, dispatch)
  })
)(RequestFormScreen);
