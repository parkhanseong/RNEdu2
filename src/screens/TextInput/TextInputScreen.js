import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { colors, customStyle } from "../../lib/styleUtils";

class TextInputScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      phone: ""
    };
  }

  onChangeText = type => value => {
    this.setState({
      [type]: value
    });
  };

  onEndEditing = () => {
    const { navigation } = this.props;
    const { phone } = this.state;
    navigation.push("Next", { phone });
  };

  render() {
    const { onChangeText, onEndEditing } = this;
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="이메일 입력해주세요"
          keyboardType="number-pad"
          value={value}
          onChangeText={onChangeText("phone")}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          clearButtonMode="while-editing"
          onEndEditing={onEndEditing}
        />
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
  textInput: {
    width: 200,
    height: 45,
    borderColor: colors.border,
    borderWidth: 1,
    paddingHorizontal: 10
  },
  parentView: {
    alignItems: "flex-start",
    width: 300,
    height: 400,
    backgroundColor: "red"
  },
  childText: {
    margin: 30,
    backgroundColor: "blue",
    fontSize: 20,
    color: "red",
    fontWeight: "900"
  }
});

export default TextInputScreen;
