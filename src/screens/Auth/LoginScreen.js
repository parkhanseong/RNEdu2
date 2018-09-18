import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { colors, customStyle } from "../../lib/styleUtils";
import {
  Navigation,
  StackNavigator,
  createStackNavigator
} from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainTab } from "../../screens/base";
import { SignNavigator } from "../../screens/Sign";
import * as signActions from "../../redux/modules/sign";
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: {
        value: "",
        isValid: null
      },
      pwd: {
        value: "",
        isValid: null
      }
    };
  }

  onChangeText = type => value => {
    const isValid = this.checkValidation(type, value);

    const { SignActions } = this.props;
    SignActions.setSign({ type, value });

    this.setState({
      [type]: { value, isValid }
    });
  };

  checkValidation = (type, value) => {
    let isValid = null;

    switch (type) {
      case "phone":
        isValid = value.length === 11 ? true : false;
        break;
      case "pwd":
        isValid = value.length >= 8 && value.length <= 20;
        break;
      default:
        break;
    }
    return isValid;
  };

  handleAlert = () => {
    Alert.alert(null, "비밀번호 찾기");
  };

  onMoveScreen = screen => () => {
    this.props.navigation.navigate("SignUp");
  };

  handleGoMain = () => {
    this.props.navigation.navigate("Main");
  };

  render() {
    const { phone, pwd } = this.state;
    const {
      onChangeText,
      handleAlert,
      onEndEditing,
      handleGoMain,
      onMoveScreen
    } = this;

    const verifiedDone = phone.isValid && pwd.isValid;
    const loginVerify = {
      backgroundColor: verifiedDone ? "#FF6E40" : "rgb(231, 231, 231)"
    };

    return (
      <View style={styles.container}>
        <View style={styles.parentView}>
          <View>
            <Text style={{ fontSize: 15 }}>휴대폰 번호</Text>
            <TextInput
              style={styles.textInput}
              placeholder="휴대폰 번호를 입력해주세요"
              maxLength={11}
              keyboardType="number-pad"
              value={phone.value}
              onChangeText={onChangeText("phone")}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              clearButtonMode="while-editing"
            />
          </View>
          <View>
            <Text style={[styles.marginTop_1, { fontSize: 15 }]}>비밀번호</Text>
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호를 입력해주세요"
              value={pwd.value}
              maxLength={20}
              onChangeText={onChangeText("pwd")}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              clearButtonMode="while-editing"
              secureTextEntry={true}
              onEndEditing={onEndEditing}
            />
          </View>
          <View style={styles.pwdView}>
            <Text style={styles.txtFindPwd} onPress={handleAlert}>
              비밀번호 찾기
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.footerBtn, loginVerify]}
            onPress={handleGoMain}
            disabled={verifiedDone ? false : true}
          >
            <Text style={styles.footerTxt} onPress={handleGoMain}>
              로그인하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  parentView: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 40
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10
  },
  pwdView: {
    justifyContent: "flex-start",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    paddingHorizontal: 70
  },
  txtFindPwd: {
    textDecorationLine: "underline",
    color: "gray",
    marginTop: 10
  },
  txtTitle: {},
  txtDesc: {},
  imgBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "yellow"
  },
  btnLogin: {},
  marginTop_1: {
    marginTop: 20,
    textAlign: "left"
  },
  footerBtn: {
    height: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  footerTxt: {
    fontSize: 18,
    color: "white"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

// export default LoginScreen;
export default connect(
  null,
  dispatch => ({
    SignActions: bindActionCreators(signActions, dispatch)
  })
)(LoginScreen);
