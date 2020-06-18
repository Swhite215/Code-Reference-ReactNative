import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Consent")}
        title="Go to Consent"
      />
      <Button
        onPress={() => props.navigation.navigate("PrepareDevice")}
        title="Go to Prepare Device"
      />
      <Button
        onPress={() => props.navigation.navigate("Survey")}
        title="Go to Survey"
      />
      <Button
        onPress={() => props.navigation.navigate("WellnessScore")}
        title="Go to Wellness Score"
      />
      <Button
        onPress={() => props.navigation.navigate("Images")}
        title="Go to Images"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Colors"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
