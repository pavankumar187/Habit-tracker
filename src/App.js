import React, { useState } from 'react';
import HabitForm from './HabitForm';
import HabitList from './HabitList';
import './style.css';

function App() {
  const [habits, setHabits] = useState([]);

  // Add a new habit
  const addHabit = (habitName) => {
    const newHabit = { id: Date.now(), name: habitName, completed: false };
    setHabits([...habits, newHabit]);
  };

  // Delete a habit
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  // Toggle completion
  const toggleCompletion = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        onDeleteHabit={deleteHabit}
        onToggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default App;
