import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { colors, customStyle } from "../../lib/styleUtils";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "../../redux/modules/base";

class ButtonScreen extends React.Component {
  onPress = () => {
    const { BaseActions } = this.props;
    BaseActions.increaseAction({ number: 5 });
  };

  render() {
    const { onPress } = this;
    const { count } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <Text>버튼버튼</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 30 }}>{count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    ...customStyle.center
  },
  button: {
    width: 100,
    height: 45,
    backgroundColor: "#bbb",
    ...customStyle.center
  }
});

export default connect(
  state => ({
    count: state.base.count,
    text: state.base.text
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ButtonScreen);

// bindActionCreators의 반환값
// {
//   'increaseAction': (payload) => dispatch(increaseAction(payload)),
// }
