import React from 'react';

function HabitItem({ habit, onDeleteHabit, onToggleCompletion }) {
  return (
    <li style={{ textDecoration: habit.completed ? 'line-through' : 'none' }}>
      {habit.name}
      <button onClick={() => onToggleCompletion(habit.id)}>
        {habit.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
}

export default HabitItem;
