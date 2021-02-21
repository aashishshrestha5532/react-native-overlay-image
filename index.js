import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

const Overlay = ({ url, title, children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: url }} style={styles.backgroundImage}>
        <View style={styles.overlay} />

        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          {!children ? (
            <Text style={{ color: "white", fontSize: 25 }}>{title}</Text>
          ) : (
            children
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Overlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#000",
    opacity: 0.4,
  },
});
