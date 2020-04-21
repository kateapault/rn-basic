import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };
    
    const goalAddHandler = () => {
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('');
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Goal" 
                    style={styles.input} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={goalAddHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        width: '80%',
        marginBottom:10,
      },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%',
        borderColor:'black',
        borderWidth: 2,
        borderRadius:10,
    },
})

export default GoalInput;