import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { colors, customStyle } from "../../lib/styleUtils";

class TextInputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  editInput = () => value => {
    this.setState({
      value
    });
  };

  render() {
    const { editInput } = this;
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해주세요"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          value={value}
          onChangeText={editInput}
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
    borderWidth: 1
  }
});

export default TextInputScreen;
