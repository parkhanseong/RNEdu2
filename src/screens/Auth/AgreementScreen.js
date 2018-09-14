import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Linking
} from "react-native";
import { colors } from "../../lib/styleUtils";
import { Icon } from "react-native-elements";

const Document = ({ children }) => (
  <View style={styles._txtInnerBox}>
    <Text style={styles.txtAgree}>{children}</Text>
  </View>
);
const Document2 = ({ onPress, children }) => (
  <View style={[styles.txtBoxAgree, { flexDirection: "row" }]}>
    <TouchableOpacity style={styles.txtInnerBox} onPress={onPress}>
      <Text style={styles.txtAgree}>{children}</Text>
    </TouchableOpacity>
    <Icon name="chevron-right" color="#d1d1d1" style={styles.rightArrow} />
  </View>
);

const ButtonNext = ({ isValid, disabled, onPress, children }) => (
  <TouchableOpacity
    style={[
      styles.btnVeriNext,
      { backgroundColor: isValid ? "#FF6E40" : "gray" }
    ]}
    disabled={!disabled}
    onPress={onPress}
  >
    <Text style={styles.footerTxt}>{children}</Text>
  </TouchableOpacity>
);

class AgreementScreen extends React.Component {
  state = {
    checkAll: false,
    checkNecessary: false,
    checkMarketing: false
  };

  onPressOpenPdf = name => () => {
    const url = `http://noldam.co.kr/terms/${name}.pdf`;
    Linking.openURL(url);
  };

  onPressCheck = type => () => {
    const value = !this.state[type];
    const { checkAll, checkNecessary, checkMarketing } = this.state;

    this.setState({
      ...this.state,
      [type]: value,
      checkAll: value ? checkAll : false
    });
  };

  onPressCheckAll = type => () => {
    const value = !this.state[type];
    const { checkAll, checkNecessary, checkMarketing } = this.state;

    this.setState({
      checkAll: value,
      checkNecessary: value,
      checkMarketing: value
    });
  };

  handleGoNextscreen = () => {
    const { checkNecessary } = this.state;
    this.props.navigation.navigate("Register", { checkNecessary });
  };

  render() {
    const {
      handleGoNextscreen,
      onPressOpenPdf,
      onPressCheckAll,
      onPressCheck
    } = this;
    const { checkAll, checkNecessary, checkMarketing } = this.state;
    const checkAllColor = {
      backgroundColor:
        checkAll || (checkNecessary && checkMarketing) ? "#FF6E40" : "gray"
    };
    const checkNecessaryColor = {
      backgroundColor: checkAll
        ? "#FF6E40"
        : checkNecessary
          ? "#FF6E40"
          : "gray"
    };
    const checkMarketingColor = {
      backgroundColor: checkAll
        ? "#FF6E40"
        : checkMarketing
          ? "#FF6E40"
          : "gray"
    };

    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 52,
            paddingHorizontal: 20
          }}
        >
          <View style={[styles.txtBoxAgreeAll, { marginTop: 30 }]}>
            <TouchableOpacity
              style={[styles.checkAllIcon, checkAllColor]}
              onPress={onPressCheckAll("checkAll")}
            >
              <Icon name="check" type="feather" size={18} color="white" />
            </TouchableOpacity>
            <Text style={styles.txtAgreeAll}>이용약관 전체 동의</Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={styles.txtNecessaryBox}>
            <View style={[styles.txtBoxAgree, { marginTop: 30 }]}>
              <TouchableOpacity
                style={[styles.checkIcon, checkNecessaryColor]}
                onPress={onPressCheck("checkNecessary")}
              >
                <Icon name="check" type="feather" size={18} color="white" />
              </TouchableOpacity>
              <Document>필수 항목 모두 동의</Document>
            </View>
            <Document2 onPress={onPressOpenPdf("service_terms")}>
              서비스 이용약관 동의 (필수)
            </Document2>
            <Document2 onPress={onPressOpenPdf("privacy_policy")}>
              개인정보 수집 및 이용동의서 (필수)
            </Document2>
            <Document2 onPress={onPressOpenPdf("refund_policy")}>
              환불 및 취소 약관 (필수)
            </Document2>
            <View style={[styles.txtBoxAgree, { marginTop: 30 }]}>
              <TouchableOpacity
                style={[styles.checkIcon, checkMarketingColor]}
                onPress={onPressCheck("checkMarketing")}
              >
                <Icon name="check" type="feather" size={18} color="white" />
              </TouchableOpacity>
              <Document>마케팅 정보 수신 동의(선택)</Document>
            </View>

            <Document2>혜택 및 이벤트 알림에 동의</Document2>
            <Text style={[styles.desc, { marginTop: 2 }]}>
              다양한 혜택과 이벤트 소식을 받을 수 있습니다
            </Text>
          </View>
          <View style={styles.grayLine} />
          <Text style={[styles.desc, { marginTop: 8 }]}>
            1. 앱푸시 수신 동의 상태는 앱내 더보기 메뉴에서 변경 가능합니다
          </Text>
          <Text style={[styles.desc, { marginTop: 5 }]}>
            2. 필수 공지사항은 수신동의 여부와 관계없이 전부 발송됩니다.
          </Text>
        </View>

        <ButtonNext
          isValid={checkNecessary || checkAll}
          disabled={checkNecessary || checkAll}
          onPress={handleGoNextscreen}
        >
          다음
        </ButtonNext>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  checkAllIcon: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  txtNecessaryBox: {
    alignItems: "flex-start"
  },
  checkIcon: {
    position: "absolute",
    width: 17,
    height: 17,
    left: 27,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray"
  },
  txtBoxAgreeAll: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  txtBoxAgree: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 40
    // backgroundColor: "yellow"
  },
  txtAgreeAll: {
    fontSize: 20
  },
  txtAgree: {
    fontSize: 17
  },
  txtInnerBox: {
    alignItems: "flex-start",
    width: 250,
    marginLeft: 50
  },
  _txtInnerBox: {
    alignItems: "flex-start",
    width: 200
    // backgroundColor: "green"
  },
  btnVeriNext: {
    width: "100%",
    height: 70,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
  },
  desc: {
    fontSize: 12,
    color: "gray"
  },
  grayLine: {
    alignItems: "center",
    height: 1,
    width: 300,
    backgroundColor: "gray",
    marginTop: 20
  },
  footerTxt: {
    fontSize: 20,
    color: "white"
  }
});

export default AgreementScreen;
