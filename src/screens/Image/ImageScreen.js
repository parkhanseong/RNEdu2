import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { colors } from "../../lib/styleUtils";

class ImageScreen extends React.Component {
  render() {
    const urlString =
      "https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png";
    return (
      <View style={styles.container}>
        <Image source={require("../../images/iconCreditCard.png")} />
        <Image
          style={styles.image}
          source={{ uri: urlString }}
          resizeMode="cover"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  image: {
    width: 300,
    height: 300
  }
});

export default ImageScreen;
