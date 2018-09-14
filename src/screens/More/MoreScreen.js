import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../lib/styleUtils";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SignActions from "../../redux/modules/sign";

class MoreScreen extends React.Component {
  onPressLogOut = () => {
    this.props.navigation.navigate("Intro");
  };

  render() {
    const { onPressLogOut } = this;
    const { name, phone, pwd } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.infoView}>
          <View style={styles.imageView}>
            <Image
              source={require("../../images/alpaca.jpg")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          <View style={styles.txtInfoParent}>
            <View style={styles.txtInfo}>
              <Text>이 름 : {name}</Text>
            </View>

            <View style={styles.txtInfo}>
              <Text>H.P : {phone}</Text>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.btnVeriNext, { backgroundColor: "gray" }]}
          >
            <Text style={styles.footerTxt}>프로필 관리</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.btnVeriNext, { backgroundColor: "gray" }]}
          >
            <Text style={styles.footerTxt}>정산 내역</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.btnVeriNext, { backgroundColor: "gray" }]}
          >
            <Text style={styles.footerTxt}>지원 내역</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.btnVeriNext, { backgroundColor: "#FF6E40" }]}
            onPress={onPressLogOut}
          >
            <Text style={styles.footerTxt}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  infoView: {
    flexDirection: "row",
    width: "90%",
    height: 100
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderWidth: 1
  },
  image: {
    borderWidth: 1
  },
  txtInfoParent: {
    width: "90%",
    height: 100,
    justifyContent: "center"
  },
  txtInfo: {
    paddingHorizontal: 10
  },
  btnVeriNext: {
    height: 70,
    // backgroundColor: "#FF6E40",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "white"
  },
  footerTxt: {
    fontSize: 20,
    color: "white"
  }
});

// export default MoreScreen;
export default connect(
  state => ({
    name: state.sign.getIn(["name", "value"]),
    phone: state.sign.getIn(["phone", "value"]),
    pwd: state.sign.getIn(["pwd", "value"])
  }),
  dispatch => ({
    SignActions: bindActionCreators(SignActions, dispatch)
  })
)(MoreScreen);
