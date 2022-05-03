import React, { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {
  const [instructionInForm, setInstructionInForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionInForm]);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add additional instructions to your order:
        <input onChange={(e) => setInstructionInForm(e.target.value)} />
        <button>Add Order Instructions</button>
      </form>
    </section>
  );
}
