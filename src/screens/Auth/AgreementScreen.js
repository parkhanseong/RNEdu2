import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Linking
} from "react-native";
import { CheckBox, Document, ButtonNext } from "../../components/Auth";
import { colors } from "../../lib/styleUtils";
import { Icon } from "react-native-elements";

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
    const { checkMarketing } = this.state;
    this.props.navigation.navigate("Register", { checkMarketing });
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
        checkAll || (checkNecessary && checkMarketing)
          ? "#FF6E40"
          : "rgb(231, 231, 231)"
    };
    const checkNecessaryColor = {
      backgroundColor: checkAll
        ? "#FF6E40"
        : checkNecessary
          ? "#FF6E40"
          : "rgb(231, 231, 231)"
    };
    const checkMarketingColor = {
      backgroundColor: checkAll
        ? "#FF6E40"
        : checkMarketing
          ? "#FF6E40"
          : "rgb(231, 231, 231)"
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
          <TouchableOpacity
            style={[styles.txtBoxAgreeAll, { marginTop: 50 }]}
            onPress={onPressCheckAll("checkAll")}
          >
            <View style={[styles.checkAllIcon, checkAllColor]}>
              <Icon name="check" type="feather" size={18} color="white" />
            </View>
            <Text style={styles.txtAgreeAll}>이용약관 전체 동의</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={styles.txtNecessaryBox}>
            <CheckBox
              onPress={onPressCheck("checkNecessary")}
              style={checkNecessaryColor}
            >
              필수 항목 모두 동의
            </CheckBox>
            <Document onPress={onPressOpenPdf("service_terms")}>
              서비스 이용약관 동의 (필수)
            </Document>
            <Document onPress={onPressOpenPdf("privacy_policy")}>
              개인정보 수집 및 이용동의서 (필수)
            </Document>
            <Document onPress={onPressOpenPdf("refund_policy")}>
              환불 및 취소 약관 (필수)
            </Document>
            <CheckBox
              onPress={onPressCheck("checkMarketing")}
              style={checkMarketingColor}
            >
              마케팅 정보 수신 동의(선택)
            </CheckBox>

            <View style={[styles.txtBoxEvent]}>
              <Text style={styles.txtAgree}>혜택 및 이벤트 알림에 동의</Text>
              <Text style={[styles.desc, { marginLeft: 30 }]}>
                다양한 혜택과 이벤트 소식을 받을 수 있습니다
              </Text>
            </View>
          </View>

          <View style={styles.grayLine} />

          <View>
            <Text style={[styles.desc, { marginTop: 8 }]}>
              1. 앱푸시 수신 동의 상태는 앱내 더보기 메뉴에서 변경 가능합니다
            </Text>
            <Text style={[styles.desc, { marginTop: 5 }]}>
              2. 필수 공지사항은 수신동의 여부와 관계없이 전부 발송됩니다.
            </Text>
          </View>
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
    flex: 1,
    backgroundColor: "#FFFFFF"
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
    marginTop: 30
  },
  txtBoxAgreeAll: {
    width: "100%",
    height: 52,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  txtAgreeAll: {
    fontSize: 17,
    fontWeight: "bold"
  },
  txtAgree: {
    fontSize: 15,
    marginLeft: 30
  },
  txtBoxAgree: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    height: 40
  },
  txtBoxEvent: {
    justifyContent: "space-between",
    width: 300,
    height: 40
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
  }
});

export default AgreementScreen;
