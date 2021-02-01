import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goal => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: goal }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals =>
      currentGoals.filter(goal => goal.id !== goalId)
    );
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeGoalHandler}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
