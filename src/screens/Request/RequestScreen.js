import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { colors, customStyle } from "../../lib/styleUtils";
import { moment, getTimeString } from "../../lib/timeUtil";
import { HeaderButton } from "../../components/Base";
import * as requestActions from "../../redux/modules/request";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { List, Map } from "immutable";
import _ from "underscore";

class RequestScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickTicket: "",
      mDayOfWeek: "",
      fromDate: "",
      daysArr: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: <HeaderButton onPress={params.onPressEdit} text="수정" />
    };
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ onPressEdit: this.onPressEdit });

    var { reqeustTicketInfo } = this.props;
    reqeustTicketInfo =
      reqeustTicketInfo === undefined ? undefined : reqeustTicketInfo.toJS();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    var { reqeustTicketInfo } = this.props;
    if (!_.isEqual(reqeustTicketInfo, nextProps.reqeustTicketInfo)) {
      return true;
    }
    return false;
  };

  _onPress = () => {
    this.props.navigation.navigate("RequestForm");
  };

  onPressEdit = () => {
    const { navigate } = this.props.navigation;
    navigate("RequestForm");
  };

  removeRequestData = () => () => {
    const { requestActions } = this.props;

    Alert.alert(
      "신청서를 지우실건가요?",
      "신청서를 지우면 지금까지 시터에게 받은 지원이 모두 삭제되고 더 이상 시터의 지원을 받을 수 없습니다.",
      [
        {
          text: "취소",
          onPress: () => {},
          style: "destructive"
        },
        {
          text: "확인",
          onPress: () => {
            requestActions.deleteRequestTicketInfo();
          }
        }
      ]
    );
  };

  render() {
    var { reqeustTicketInfo } = this.props;
    reqeustTicketInfo =
      reqeustTicketInfo === undefined ? undefined : reqeustTicketInfo.toJS();

    const { pickTicket, fromDate, mDayOfWeek, daysArr, startIndex, hour } =
      reqeustTicketInfo === undefined ? "" : reqeustTicketInfo;
    const { _onPress, removeRequestData } = this;
    const strPeriodTime = getTimeString(startIndex, hour);
    const strFromDate = moment(fromDate).format(FROMDATE_FORMAT);

    return (
      <View style={styles.container}>
        {reqeustTicketInfo === undefined ? (
          <View>
            <View style={styles.txtNotice}>
              <Text style={styles.txtFontStyle}>
                신청서를 등록하시면 시터로부터 지원을 받으실 수 있습니다. {"\n"}
                신청서는 하나의 놀이만 등록 가능합니다.
              </Text>
            </View>

            <TouchableOpacity
              onPress={_onPress}
              style={styles.parentBtnRequest}
            >
              <View style={styles.btnRequest}>
                <Text style={styles.iconRequest}>+</Text>
                <Text style={styles.txtRequest}>신청서 등록하기</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.txtNotice}>
              <Text style={styles.txtFontStyle}>
                신청서의 만료 기간이 지나면 지원받은 시터 프로필과 {"\n"}
                신청서는 자동 삭제됩니다.
              </Text>
            </View>

            <View style={styles.txtTitle}>
              <Text>신청서 정보</Text>
            </View>
            <View style={styles.txtReqInfo}>
              <Text>놀이 이용권</Text>
              <Text>{pickTicket === "L" ? "정기권" : "단발성"}</Text>
            </View>
            {pickTicket === "L" ? (
              <View style={styles.txtReqInfo}>
                <Text>희망 요일</Text>
                <Text>{mDayOfWeek === null ? "" : daysArr}</Text>
              </View>
            ) : null}
            <View style={styles.txtReqInfo}>
              <Text>시작 날짜</Text>
              <Text>{strFromDate === null ? "" : strFromDate}</Text>
            </View>
            <View style={styles.txtReqInfo}>
              <Text>시작 시간</Text>
              <Text>{strPeriodTime === null ? "" : strPeriodTime}</Text>
            </View>
            <TouchableOpacity
              style={styles.btnDelete}
              onPress={removeRequestData()}
            >
              <View>
                <Text style={styles.btnText}>신청서 지우기</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const FROMDATE_FORMAT = "YYYY[년] MM[월] DD[일] (ddd)";
const FROMTIME_FORMAT = "A hh:mm";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4"
  },
  txtNotice: {
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    marginLeft: 20,
    height: 70
  },
  txtTitle: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    height: 50,
    paddingHorizontal: 10
  },
  txtReqInfo: {
    marginTop: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  btnDelete: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    ...customStyle.center,
    height: 50,
    paddingHorizontal: 10
  },
  btnText: {
    color: "#f25130",
    fontSize: 15
  },
  txtFontStyle: {
    color: "#b3b3b3",
    fontSize: 13
  },
  parentBtnRequest: {
    ...customStyle.center,
    backgroundColor: "#ffffff",
    height: 140
  },
  btnRequest: {
    backgroundColor: "#ffffff",
    ...customStyle.center
  },
  iconRequest: {
    color: "#2d2d2d",
    fontSize: 43
  },
  txtRequest: {
    color: "#2d2d2d",
    fontSize: 15
  }
});

export default connect(
  state => ({
    reqeustTicketInfo: state.request.get("reqeustTicketInfo")
  }),
  dispatch => ({
    requestActions: bindActionCreators(requestActions, dispatch)
  })
)(RequestScreen);
