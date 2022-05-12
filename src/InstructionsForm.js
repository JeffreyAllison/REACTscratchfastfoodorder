import React, { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {
  const [instructionInForm, setInstructionInForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionInForm]);
  }

  return (
    <section>
      <form className="instructions" onSubmit={handleSubmit}>
        Add special instructions to your order <i>(not all instructions can be accommodated)</i>:
        <input
          className="instruction-input"
          onChange={(e) => setInstructionInForm(e.target.value)}
        />
        <button>Add Special Instructions</button>
      </form>
    </section>
  );
}
