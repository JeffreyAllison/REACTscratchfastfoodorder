import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      <h3>Order Instructions:</h3>
      {instructions.map((instruction, i) => (
        <Instruction key={instruction + i} instruction={instruction} />
      ))}
    </section>
  );
}
