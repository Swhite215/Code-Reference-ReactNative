import React from 'react'
import { Text, StyleSheet, View }  from "react-native"

// Component w/ Styles
const ComponentsScreen = () => {
    const name = "Spencer";

    return (<View>
            <Text style={styles.textStyle} >Getting started with React Native!</Text>
            <Text style={styles.subTextStyle}>Hi, my name is {name}</Text>
        </View>)
}

// Stylesheet
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subTextStyle: {
        fontSize: 20
    }
});

// Export Component
export default ComponentsScreen