import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return(
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
      }, 
});

export default GoalItem;