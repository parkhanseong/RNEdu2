import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "../../redux/modules/base";
import { colors } from "../../lib/styleUtils";

const errorDesc = status => {
  if (status === undefined) return "인터넷 연결을 확인주세요";
  switch (500) {
    case 400:
      return "잘못된 요청입니다";
    case 401:
      return "로그인이 만료되었습니다";
    case 403:
      return "아이디와 비밀번호가 일치하지 않습니다";
    case 404:
      return "요청 경로가 잘못되었습니다";
    case 500:
      return "서버 상의 문제가 발생하였습니다\n불편을 드려 정말 죄송합니다\n해당 문제는 개발자에게 문의 부탁드립니다";
    default:
      break;
  }
};

class ModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: true };
  }

  setModalVisible = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { setModalVisible } = this;
    const { status } = this.props;

    return (
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View style={styles.imgView}>
              <Image source={require("../../images/faceError.png")} />
            </View>
            <View style={styles.titleView}>
              <Text style={styles.txtTitle}>오류 발생!</Text>
            </View>
            <View style={styles.contentView}>
              {/* <Text>알 수 없는 오류코드가 발생했습니다.</Text>
              <Text>다시 시도해주세요.</Text> */}
              <Text style={styles.txtContents}>{errorDesc(status)}</Text>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  setModalVisible();
                }}
              >
                <Text>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)"
  },
  modalView: {
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: 270,
    backgroundColor: "#FFFFFF"
  },
  imgView: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 100
  },
  titleView: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 30
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: "600"
  },
  contentView: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 50
  },
  buttonView: {
    alignItems: "center",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    height: 40,
    marginRight: 5,
    paddingHorizontal: 10
  }
});

// export default ModalView;
export default connect(
  state => ({
    status: state.base.get("status")
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ModalView);
