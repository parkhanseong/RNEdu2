import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { colors, customStyle } from "../../lib/styleUtils";

const urlString =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXzULFeLZZPHLSx3KfRl7Us4DjguSbY10aATlIjcoTx2vngY3hw";

class ImageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: urlString }} />
        <Image source={require("../../images/iconCreditCard.png")} />
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
  image: {
    width: 200,
    height: 90
  }
});

export default ImageScreen;
