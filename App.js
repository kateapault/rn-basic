import React, { useState } from 'react';
import { StyleSheet, Button, View, Modal, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalID => {
    setGoals(currentGoals => {
      console.log('presseddddd')
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={()=>setIsAddMode(true)} />
      <GoalInput 
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList 
        keyExtractor={(item,index)=> item.id}
        data={goals} 
        renderItem={ itemData => (
          <GoalItem 
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
   
});