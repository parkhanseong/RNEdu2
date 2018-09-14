import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  Dimensions,
  Animated,
  Easing
} from "react-native";
import { colors } from "../../lib/styleUtils";
import { KakaoButton, FacebookButton } from "../../container/Intro";

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movingAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    let { movingAnim } = this.state;
    Animated.sequence([
      Animated.timing(movingAnim, {
        toValue: 1,
        duration: 30000,
        easing: Easing.linear
      }),
      Animated.timing(movingAnim, {
        toValue: 0,
        duration: 30000,
        easing: Easing.linear
      })
    ]).start(() => this.animate());
  };

  _onPressSignup = () => {
    this.props.navigation.navigate("Agreement");
  };

  handleGoMain = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    const { _onPressSignup, handleGoMain } = this;
    const moving = this.state.movingAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-200, -500, -200]
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.imgStyle,
            {
              transform: [{ translateX: moving }]
            }
          ]}
        >
          <Image source={require("../../images/loginBackground.png")} />
        </Animated.View>
        <View style={styles.bottomView}>
          <View style={styles.titleImageWrapper}>
            <Image
              style={styles.logoTitle}
              source={require("../../images/loginWhitelogo.png")}
            />
          </View>
          <View steyl={styles.bottomCenterView}>
            <KakaoButton />
            <FacebookButton />
            <View style={{ marginTop: 9 }}>
              <TouchableOpacity
                onPress={_onPressSignup}
                style={styles.buttonSimpleSignUp}
              >
                <Text style={styles.buttonTextSimpleSignUp}>간편 회원가입</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnLogin}>
              <TouchableOpacity onPress={handleGoMain} style={styles.btnLogin}>
                <View style={styles.txtView}>
                  <Text style={styles.txtQuestion}>
                    이미 놀담 회원이신가요?
                  </Text>
                  <Text style={styles.txtLogin}>로그인하기</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.copyright}>
            copyrightⓒ2018 (주)잘노는 All rights reserved.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 50,
    color: "white"
  },
  bottomView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around"
  },
  bottomCenterView: {
    flex: 1,
    width: "60%",
    justifyContent: "space-between"
  },
  titleImageWrapper: {
    width: 300,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  logoTitle: {
    width: 100,
    height: 50
  },
  imgStyle: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  buttonSimpleSignUp: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50
  },
  btnSignup: {
    width: 100,
    height: 100,
    borderWidth: 1,
    backgroundColor: "white"
  },
  buttonTextSimpleSignUp: {
    color: "white"
  },
  imageWrapper: {
    width: 30,
    alignItems: "center"
  },
  btnLogin: {
    justifyContent: "center",
    alignItems: "center"
  },
  txtView: {
    flexDirection: "row",
    marginTop: 30
  },
  txtQuestion: {
    color: "white"
  },
  txtLogin: {
    textDecorationLine: "underline",
    marginLeft: 10,
    color: "white"
  },
  copyright: {
    marginTop: 20,
    fontSize: 10,
    color: "white"
  }
});

export default IntroScreen;
