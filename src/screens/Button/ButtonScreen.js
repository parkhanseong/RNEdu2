import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { colors, customStyle } from "../../lib/styleUtils";

class ButtonScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            Alert.alert(null, "알파카파카");
          }}
        >
          <Text>버튼</Text>
        </TouchableOpacity>
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

export default ButtonScreen;
