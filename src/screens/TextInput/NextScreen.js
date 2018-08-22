import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../lib/styleUtils";

class NextScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const value = navigation.getParam("phone");
    return (
      <View style={styles.container}>
        <Text>{value}</Text>
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

export default NextScreen;
