import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as buttonActions from "../../redux/modules/button";
import { colors } from "../../lib/styleUtils";

class ButtonNextScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { passName, passAge, passAdress, passHabit } = this.props;
    
    return (
      <View style={styles.container}>
        <Text> 이름 : {passName} </Text>
        <Text> 나이 : {passAge} </Text>
        <Text> 주소 : {passAdress} </Text>
        <Text> 취미 : {passHabit} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});

//export default ButtonNextScreen;

export default connect(
    state => (
    {
        passName : state.button.name,
        passAge : state.button.age,
        passAdress : state.button.address,
        passHabit : state.button.habit
    }),
    dispatch => ({
        buttonActions: bindActionCreators(buttonActions, dispatch)
    })
)(ButtonNextScreen);
