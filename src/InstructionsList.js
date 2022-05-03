import React from 'react';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      <h3>Order Instructions:</h3>
      {instructions.map((instruction, i) => (
        <p key={instruction + i}>{instruction}</p>
      ))}
    </section>
  );
}
