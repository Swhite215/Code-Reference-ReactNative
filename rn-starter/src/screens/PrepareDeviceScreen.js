import React from "react";
import { Text, StyleSheet, View } from "react-native";

// Component w/ Styles
const PrepareDeviceScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the PrepareDevice screen!</Text>
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    textAlign: "center",
  },
});

// Export Component
export default PrepareDeviceScreen;
