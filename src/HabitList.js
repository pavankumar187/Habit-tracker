import React from 'react';
import HabitItem from './HabitItem';

function HabitList({ habits, onDeleteHabit, onToggleCompletion }) {
  return (
    <ul>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onDeleteHabit={onDeleteHabit}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </ul>
  );
}

export default HabitList;
