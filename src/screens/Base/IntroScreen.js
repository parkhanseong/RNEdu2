import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../lib/styleUtils";

class IntroScreen extends React.Component {
  _onPressSignup = () => {};

  render() {
    const { _onPressSignup } = this;

    return (
      <View style={styles.container}>
        <View steyl={styles.childrenStyle}>
          <View style={styles.txtTitle}>
            <Text>Intro Screen</Text>
          </View>
          <View style={styles.btnSignup}>
            <TouchableOpacity onPress={() => _onPressSignup()}>
              <Text>간편 회원 가입</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnLogin}>
            <TouchableOpacity>
              <Text>로그인하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background
  },
  childrenStyle: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "black"
  },
  btnSignup: {},
  txtTitle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "yellow"
  },
  btnLogin: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  }
});

export default IntroScreen;
