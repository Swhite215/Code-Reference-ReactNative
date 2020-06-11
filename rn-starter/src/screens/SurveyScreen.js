import React from "react";
import { Text, StyleSheet, View } from "react-native";

// Component w/ Styles
const SurveyScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the Survey screen!</Text>
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
export default SurveyScreen;
