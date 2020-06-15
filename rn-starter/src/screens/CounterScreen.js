import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

// Component w/ Styles
const CounterScreen = () => {
  let [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({});

// Export Component
export default CounterScreen;
