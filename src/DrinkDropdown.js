import React from 'react';

export default function DrinkDropdown({ setDrink }) {
  return (
    <div>
      Choose a Drink Option:
      <select onChange={(e) => setDrink(e.target.value)}>
        <option value="drink-1">Smoothie</option>
        <option value="drink-2">TAB soda</option>
        <option value="drink-3">Iced Tea</option>
      </select>
    </div>
  );
}
