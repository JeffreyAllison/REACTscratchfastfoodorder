import React from 'react';

export default function FoodDropdown({ setFood }) {
  return (
    <div>
      Choose a Main Option:
      <select onChange={(e) => setFood(e.target.value)}>
        <option value="food-1">Beef Wellington</option>
        <option value="food-2">Kabobs</option>
        <option value="food-3">Pad Thai</option>
      </select>
    </div>
  );
}
