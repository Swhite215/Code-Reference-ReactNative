import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

// Component w/ Styles
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change, setter) => {
    color + change > 255 || color + change < 0 ? null : setter(color + change);
  };

  console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor(red, COLOR_INCREMENT, setRed)}
        onDecrease={() => setColor(red, -1 * COLOR_INCREMENT, setRed)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor(green, COLOR_INCREMENT, setGreen)}
        onDecrease={() => setColor(green, -1 * COLOR_INCREMENT, setGreen)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor(blue, COLOR_INCREMENT, setBlue)}
        onDecrease={() => setColor(blue, -1 * COLOR_INCREMENT, setBlue)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({});

// Export Component
export default SquareScreen;
