import React from 'react';

export default function Order({ drinkId, sideId, foodId }) {
  return (
    <div className="order">
      <h4>your current order:</h4>
      <img src={`${drinkId}.jpeg`} />
      <img src={`${sideId}.jpeg`} />
      <img src={`${foodId}.jpeg`} />
    </div>
  );
}
