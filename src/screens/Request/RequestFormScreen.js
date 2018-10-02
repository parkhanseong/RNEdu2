import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Button
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import DatePicker from "react-native-datepicker";
import { colors, customStyle } from "../../lib/styleUtils";
import { ButtonNext } from "../../components/Auth";
import { moment } from "../../lib/timeUtil";

class RequestFormScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickTicket: {
        value: "L"
      },
      pickDayOfWeek: {
        day: "",
        set: ""
      },
      mDayOfWeek: "0000000",
      // btnMonday: {
      //   set: false
      // },
      // btnTuesday: {
      //   set: false
      // },
      // btnWednesday: {
      //   set: false
      // },
      // btnThursday: {
      //   set: false
      // },
      // btnFriday: {
      //   set: false
      // },
      // btnSaturday: {
      //   set: false
      // },
      // btnSunday: {
      //   set: false
      // },
      radioValue: "",
      initDate: moment().format("YYYY[년] MM[월] DD[일] (ddd)"),
      fromDate: moment(),
      initTime: moment()
        .hour(9)
        .minute(0)
        .format(TIME_FORMAT),
      fromTime: moment()
        .hour(9)
        .minute(0),
      periodTime: 0,
      toTime: moment()
        .hour(11)
        .minute(0),
      addTime: 2
    };
  }

  handleDayOfWeek = day => () => {
    var { mDayOfWeek } = this.state;
    // var { set } = this.state[type];
    var isSelected = 1;
    // day번째 0/1 여부 체크
    if (((mDayOfWeek >> day) & 1) === 1) {
      isSelected = 0;
    }

    console.log("isSelected >>");
    console.log(isSelected);

    // if (!set) {
    this.setState({
      ...this.state,
      mDayOfWeek:
        isSelected === 1
          ? (mDayOfWeek |= 1 << day)
          : (mDayOfWeek &= ~(1 << day))
      // [type]: { set }
    });
    // }
    //  else {
    //   this.setState({
    //     ...this.state,
    //     mDayOfWeek: (mDayOfWeek &= ~(1 << day))
    //   });
    // }

    // this.checkDayOfWeek(day, mDayOfWeek, set, type);
  };

  // checkDayOfWeek = (day, mDayOfWeek, set, type) => {
  //   var temp = 0;
  //   temp = mDayOfWeek;

  //   console.log(">>>> checkDayOfWeek");
  //   console.log(type);

  //   var set = !set;
  //   if (((temp >> day) & 1) == 1) {
  //여기서 요일 체크 여부 확인 함
  //   this.setState({
  //     [type]: { set }
  //   });
  // }

  //  else {
  //   this.setState({
  //     [type]: { set }
  //   });
  // }
  // };

  _onPressPickTicket = type => () => {
    const value = type === "season" ? "L" : "S";
    this.setState({
      pickTicket: { value }
    });
  };

  onPeriodTimeChange = (type, date) => {
    const { fromTime } = this.state;
    var { addTime } = this.state;

    switch (date) {
      case 0:
        addTime = 2;
        break;
      case 1:
        addTime = 3;
        break;
      case 2:
        addTime = 4;
        break;
      default:
        break;
    }

    this.setState({
      toTime: moment(fromTime, TIME_FORMAT).add(addTime, "h"),
      addTime: addTime,
      [type]: date
    });
  };

  onDateChange = type => date => {
    const { addTime } = this.state;
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

    this.setState({
      toTime: moment(date, TIME_FORMAT).add(addTime, "h"),
      [type]: moment(date, FORMAT)
    });
  };

  _onPressRequestService = () => {
    const { pickTicket, mDayOfWeek, fromDate, fromTime, toTime } = this.state;

    const data = {
      pickTicket: pickTicket.value,
      mDayOfWeek: mDayOfWeek,
      fromDate: fromDate,
      fromTime: fromTime,
      toTime: toTime
    };

    this.props.navigation.navigate("Request", { data: data });
  };

  render() {
    var radio_props = [
      { label: "2시간", value: 0 },
      { label: "3시간", value: 1 },
      { label: "4시간", value: 2 }
    ];

    const {
      _onPress,
      _onPressPickTicket,
      onDateChange,
      onPeriodTimeChange,
      handleDayOfWeek,
      _onPressRequestService
    } = this;
    const {
      pickTicket,
      selectedPeriod,
      selectedService,
      initDate,
      initTime,
      periodTime,
      btnMonday,
      btnTuesday,
      btnWednesday,
      btnThursday,
      btnFriday,
      btnSaturday,
      btnSunday,
      fromDate,
      fromTime,
      toTime,
      mDayOfWeek
    } = this.state;

    const pickColor_L = pickTicket.value === "L" ? "#FF6E40" : "#000000";
    const pickColor_S = pickTicket.value === "S" ? "#FF6E40" : "#000000";

    console.log("mDayOfWeek >>>");
    console.log(mDayOfWeek);

    const btnBgcMonday =
      (((mDayOfWeek >> 0) & 1) === 1) === true ? "#FF6E40" : colors.basicGray;
    // btnMonday.set === true ? "#FF6E40" : colors.basicGray;
    const btnBgcTuesday =
      (((mDayOfWeek >> 1) & 1) === 1) === true ? "#FF6E40" : colors.basicGray;
    // btnTuesday.set === true ? "#FF6E40" : colors.basicGray;
    const btnBgcWednesday =
      (((mDayOfWeek >> 2) & 1) === 1) === true ? "#FF6E40" : colors.basicGray;
    // btnWednesday.set === true ? "#FF6E40" : colors.basicGray;
    const btnBgcThursday =
      (((mDayOfWeek >> 3) & 1) === 1) === true ? "#FF6E40" : colors.basicGray;
    // btnThursday.set === true ? "#FF6E40" : colors.basicGray;
    const btnBgcFriday =
      (((mDayOfWeek >> 4) & 1) === 1) === true ? "#FF6E40" : colors.basicGray;
    // btnFriday.set === true ? "#FF6E40" : colors.basicGray;
    const btnBgcSaturday =
      (((mDayOfWeek >> 5) & 1) === 1) === true ? "#FF6E40" : colors.basicGray;
    // btnSaturday.set === true ? "#FF6E40" : colors.basicGray;
    const btnBgcSunday =
      (((mDayOfWeek >> 6) & 1) === 1) === true ? "#FF6E40" : colors.basicGray;
    // btnSunday.set === true ? "#FF6E40" : colors.basicGray;

    return (
      <View style={styles.container}>
        <View style={styles.parentViewPlayTicket}>
          <View style={styles.viewPlayTicket}>
            <Text style={styles.txtPlayTicket}>놀이 이용권</Text>
          </View>
          <View style={styles.grayLine} />

          <View style={styles.viewBtnOption}>
            <TouchableOpacity
              style={[styles.btnOption, { borderColor: pickColor_L }]}
              onPress={_onPressPickTicket("season")}
            >
              <Text style={[styles.txtServiceTitle, { color: pickColor_L }]}>
                정기권
              </Text>
              <Text style={[styles.txtServiceSubTitle, { color: pickColor_L }]}>
                정기적으로 놀이 진행
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnOption, { borderColor: pickColor_S }]}
              onPress={_onPressPickTicket("single")}
            >
              <Text style={[styles.txtServiceTitle, { color: pickColor_S }]}>
                단발권
              </Text>
              <Text style={[styles.txtServiceSubTitle, { color: pickColor_S }]}>
                하루만 놀이 진행
              </Text>
            </TouchableOpacity>
          </View>

          {pickTicket.value === "L" ? (
            <View style={{ marginLeft: 22.5 }}>
              <Text style={{ color: "#FF6E40" }}>
                ∙ 정기권 놀이는 4주 단위로 계약됩니다.
              </Text>
            </View>
          ) : null}
        </View>

        <View style={styles.viewTimeRequest}>
          <View style={styles.viewPlayTicket}>
            <Text style={styles.txtPlayTicket}>희망 요일</Text>
          </View>
          <View style={styles.grayLine} />

          <View style={styles.viewSelectDayTime}>
            <View style={styles.buttonDayOfWeek}>
              {/* isSelected={selected === btnDayOfWeek} */}

              <TouchableOpacity
                style={[
                  styles.selectedDayOfWeek,
                  { backgroundColor: btnBgcMonday }
                ]}
                onPress={handleDayOfWeek("0")}
              >
                <Text>월</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.selectedDayOfWeek,
                  { backgroundColor: btnBgcTuesday }
                ]}
                onPress={handleDayOfWeek("1")}
              >
                <Text>화</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectedDayOfWeek,
                  { backgroundColor: btnBgcWednesday }
                ]}
                onPress={handleDayOfWeek("2")}
              >
                <Text>수</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectedDayOfWeek,
                  { backgroundColor: btnBgcThursday }
                ]}
                onPress={handleDayOfWeek("3")}
              >
                <Text>목</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectedDayOfWeek,
                  { backgroundColor: btnBgcFriday }
                ]}
                onPress={handleDayOfWeek("4")}
              >
                <Text>금</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectedDayOfWeek,
                  { backgroundColor: btnBgcSaturday }
                ]}
                onPress={handleDayOfWeek("5")}
              >
                <Text>토</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectedDayOfWeek,
                  { backgroundColor: btnBgcSunday }
                ]}
                onPress={handleDayOfWeek("6")}
              >
                <Text>일</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.viewFormDate}>
              <Text>시작 날짜</Text>
              <DatePicker
                style={{ width: 140 }}
                date={fromDate}
                mode="date"
                placeholder="select date"
                format="YYYY년 MM월 DD일 (ddd)"
                minDate={initDate}
                confirmBtnText="확인"
                cancelBtnText="취소"
                showIcon={false}
                customStyles={{
                  dateInput: { borderWidth: 0, alignItems: "flex-end" }
                }}
                onDateChange={onDateChange("fromDate")}
              />
            </View>
          </View>

          <View style={styles.grayLine} />

          <View style={styles.viewFromTime}>
            <Text>시작 시간</Text>
            <DatePicker
              style={{ width: 100, borderColor: "#FFFFFF" }}
              date={fromTime}
              mode="time"
              placeholder="select date"
              format="A hh:mm"
              minDate={initTime}
              maxDate="24:00"
              minuteInterval={30}
              confirmBtnText="확인"
              cancelBtnText="취소"
              showIcon={false}
              onDateChange={onDateChange("fromTime")}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  alignItems: "flex-end"
                }
              }}
            />
          </View>

          <View style={styles.grayLine} />

          <View style={styles.selectPeriodTime}>
            <RadioForm initial={0} formHorizontal={true}>
              {radio_props.map((obj, i) => {
                return (
                  <RadioButton
                    style={{ marginTop: 10 }}
                    animation={true}
                    key={i}
                  >
                    <RadioButtonInput
                      labelHorizontal={true}
                      obj={obj}
                      index={i}
                      isSelected={periodTime === obj.value}
                      onPress={value => {
                        onPeriodTimeChange("periodTime", value);
                      }}
                      borderWidth={1}
                      buttonInnerColor={"#FF6E40"}
                      buttonOuterColor={
                        periodTime === i ? colors.main : "#d1d1d1"
                      }
                      buttonSize={10}
                      buttonOuterSize={20}
                      buttonWrapStyle={{ marginLeft: 10 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={value => {
                        onPeriodTimeChange("periodTime", value);
                      }}
                      labelStyle={{ fontSize: 15 }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                );
              })}
            </RadioForm>
          </View>
        </View>

        <View style={styles.txtResultPeriod}>
          <Text>
            {fromTime.format(TIME_FORMAT)} ~ {toTime.format(TIME_FORMAT)}
          </Text>
          <Text />
        </View>

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
    backgroundColor: "rgb(244, 244, 244)"
  },
  grayLine: {
    height: 2,
    backgroundColor: "rgb(244, 244, 244)"
  },
  viewBtnOption: {
    flexDirection: "row",
    ...customStyle.center,
    justifyContent: "space-around"
  },
  btnOption: {
    // flexDirection: "row",
    ...customStyle.center,
    width: 135,
    height: 49,
    borderWidth: 1,
    marginVertical: 10
  },
  txtServiceTitle: {
    fontSize: 15
  },
  txtServiceSubTitle: {
    fontSize: 11
  },
  viewPlayTicket: {
    height: 45,
    justifyContent: "center",
    backgroundColor: "rgb(255, 255, 255)"
  },
  txtPlayTicket: {
    marginLeft: 22.5,
    fontSize: 15
  },
  parentViewPlayTicket: {
    height: 152,
    backgroundColor: "rgb(255, 255, 255)"
  },
  // btnDayOfWeek: {},
  viewTimeRequest: {
    height: 256,
    backgroundColor: "rgb(255, 255, 255)",
    marginTop: 10
  },
  viewSelectDayTime: {
    height: 100
  },
  buttonDayOfWeek: {
    height: 50,
    ...customStyle.center,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30
  },
  selectedDayOfWeek: {
    width: 34,
    height: 34,
    backgroundColor: "rgb(231, 231, 231)",
    borderRadius: 50,
    ...customStyle.center
  },
  viewFormDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 22.5
  },
  viewFromTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginHorizontal: 22.5
  },
  selectPeriodTime: {
    ...customStyle.center,
    height: 50
    // justifyContent: "space-between"
    // backgroundColor: "yellow"
  },
  txtResultPeriod: {
    ...customStyle.center,
    height: 40
  },
  radioView: {
    // alignItems: "flex-start",
    // width: "100%",
    marginTop: 15
  }
});

export default RequestFormScreen;
