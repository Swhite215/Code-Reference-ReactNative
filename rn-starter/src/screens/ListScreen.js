import React from 'react'
import { Text, StyleSheet, View, FlatList } from "react-native"

// Component w/ Styles
const ListScreen = () => {

    const friends = [
        { name: "Friend #1", age: "24"},
        { name: "Friend #2", age: "25" },
        { name: "Friend #3", age: "26" },
        { name: "Friend #4", age: "27" }, 
        { name: "Friend #5", age: "28"},
        { name: "Friend #6", age: "29" },
        { name: "Friend #7", age: "30" }
    ];

    const renderHorizontalFriend = ({item}) => {
        // element = { item: { name: "Friend #1"}, index: 0 }
    return <Text  style={styles.horizontalTextStyle} >{item.name} is {item.age} years old!</Text>
    }

    const renderVerticalFriend = ({item}) => {
        // element = { item: { name: "Friend #1"}, index: 0 }
    return <Text  style={styles.verticalTextStyle} >{item.name} is {item.age} years old!</Text>
    }

    return (<View>
        <Text>List Screen</Text>
        
        <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name} 
        data={friends} 
        renderItem={renderHorizontalFriend}>
        </FlatList>

        <FlatList 
        keyExtractor={(friend) => friend.name} 
        data={friends} 
        renderItem={renderVerticalFriend}>
        </FlatList>

    </View>)
}

// Stylesheet
const styles = StyleSheet.create({
    horizontalTextStyle: {
        marginHorizontal: 25
    },
    verticalTextStyle: {
        marginVertical: 25
    }
});

// Export Component
export default ListScreen