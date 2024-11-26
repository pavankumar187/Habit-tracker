import React, { useState } from 'react';

function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) return;
    onAddHabit(habitName);
    setHabitName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter a habit..."
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
