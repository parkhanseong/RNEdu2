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
import { KakaoButton, FacebookButton } from "../../components/Auth";

const BACKGROUND_IMAGE_WIDTH = 1013;
const screenWidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: {
        xValue: new Animated.Value(0),
        stopAnimation: false
      }
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    let { anim } = this.state;

    Animated.sequence([
      Animated.timing(anim.xValue, {
        toValue: 1,
        duration: 30000,
        easing: Easing.linear
      }),
      Animated.timing(anim.xValue, {
        toValue: 0,
        duration: 30000,
        easing: Easing.linear
      })
    ]).start(() => {
      if (this.state.anim.stopAnimation === false) {
        this.animate();
      }
    });
  };

  _stopAnimate = () => {
    this.state.anim = { stopAnimation: true };
  };

  _onPressSignup = () => {
    this._stopAnimate();
    this.props.navigation.navigate("Agreement");
  };

  handleGoMain = () => {
    this._stopAnimate();
    this.props.navigation.navigate("Login");
  };

  render() {
    const { _onPressSignup, handleGoMain } = this;
    const movingValue = BACKGROUND_IMAGE_WIDTH - screenWidth;
    const moving = this.state.anim.xValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -movingValue]
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
                style={styles.btnSimpleSignUp}
              >
                <Text style={styles.btnTextSimpleSignUp}>간편 회원가입</Text>
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
  btnSimpleSignUp: {
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
  btnTextSimpleSignUp: {
    color: "white"
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
