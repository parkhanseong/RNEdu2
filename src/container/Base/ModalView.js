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
import { colors } from "../../lib/styleUtils";

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
              <Text>알 수 없는 오류코드가 발생했습니다.</Text>
              <Text>다시 시도해주세요.</Text>
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
    alignItems: "center"
  },
  modalView: {
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: 270
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

export default ModalView;
