import React from 'react'
import { Text, StyleSheet}  from "react-native"

// Component w/ Styles
const ComponentsScreen = () => {
    return <Text style={styles.textStyle} >This is the components screen!</Text>
}

// Stylesheet
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen