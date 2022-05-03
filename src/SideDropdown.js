import React from 'react';

export default function SideDropdown({ setSide }) {
  return (
    <div>
      Choose a Drink Option:
      <select onChange={(e) => setSide(e.target.value)}>
        <option value="side-1">Dal</option>
        <option value="side-2">Dosa</option>
        <option value="side-3">Fries</option>
      </select>
    </div>
  );
}
