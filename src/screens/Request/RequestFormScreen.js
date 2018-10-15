import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Button,
  Alert,
  ScrollView,
  FlatList
} from "react-native";
import { colors, customStyle, isSE } from "../../lib/styleUtils";
import { ButtonNext } from "../../components/Auth";
import {
  RequestTicket,
  DayOfWeek,
  SelectDay,
  SelectTime,
  SelectPeriodTime,
  EstimatedAmount
} from "../../components/Request";
import {
  moment,
  convertToIndex,
  getTimeString,
  getEndTime
} from "../../lib/timeUtil";
import * as requestActions from "../../redux/modules/request";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
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

    reqeustTicketInfo = !reqeustTicketInfo
      ? undefined
      : reqeustTicketInfo.toJS();

    if (reqeustTicketInfo) {
      this.setState(reqeustTicketInfo);
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

  handlePickTicket = (type, value) => () => {
    this.setState({
      ...this.state,
      [type]: value
    });
  };

  handlePeriodTimeChange = (type, hour) => {
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

  onPressRequestService = () => {
    const { pickTicket, mDayOfWeek, fromDate, startIndex, hour } = this.state;

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

    if (getEndTime(startIndex, hour) > 22) {
      Alert.alert("", "종료 시간은 22시를 넘길 수 없습니다.");
      return;
    }

    Alert.alert("완료", "지원받기가 정상적으로 완료 되었습니다.", [
      {
        text: "확인",
        onPress: () => {
          this.props.navigation.navigate("Request", { data });
        }
      }
    ]);
  };

  render() {
    const {
      handlePickTicket,
      onDateChange,
      onPressInfoChange,
      handlePeriodTimeChange,
      handleDayOfWeek,
      onPressRequestService
    } = this;
    const { startIndex, hour, pickTicket, fromDate, mDayOfWeek } = this.state;

    const renderView = (
      <View>
        <RequestTicket isSelected={pickTicket} onPress={handlePickTicket} />
        <View style={[styles.viewTimeRequest]}>
          {pickTicket === "L" ? (
            <DayOfWeek onPress={handleDayOfWeek} isSelected={mDayOfWeek} />
          ) : null}
          <SelectDay data={{ fromDate, pickTicket }} onPress={onDateChange} />
          <SelectTime onPress={onDateChange} startIndex={startIndex} />
          <SelectPeriodTime hour={hour} onPress={handlePeriodTimeChange} />
        </View>

        <View style={styles.txtResultPeriod}>
          <Text>{getTimeString(startIndex, hour)}</Text>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        {isSE ? <ScrollView>{renderView}</ScrollView> : renderView}
        <EstimatedAmount data={{ pickTicket, hour, mDayOfWeek }} />
        <ButtonNext onPress={onPressRequestService} disabled={true}>
          지원받기
        </ButtonNext>
      </View>
    );
  }
}

RequestFormScreen.propTypes = {
  pickTicket: PropTypes.string,
  mDayOfWeek: PropTypes.number,
  fromDate: PropTypes.object,
  startIndex: PropTypes.number,
  hour: PropTypes.number
};

const TIME_FORMAT = "A hh:mm";
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  txtServiceSubTitle: {
    fontSize: 11
  },
  viewTimeRequest: {},
  txtResultPeriod: {
    ...customStyle.center,
    paddingVertical: 20,
    paddingBottom: isSE ? 110 : 0
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
