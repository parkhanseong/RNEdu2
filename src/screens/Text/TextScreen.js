import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../lib/styleUtils";

class TextScreen extends React.Component {
  render() {
    const lastText = "Last Text";
    return (
      <View style={styles.container}>
        <Text>Hello, World!</Text>
        <Text style={styles.text}>
          <Text style={{ color: colors.text }}>Middle Text</Text>
        </Text>
        <Text>This is {lastText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  text: {
    color: colors.main,
    fontSize: 20
  }
});

export default TextScreen;
