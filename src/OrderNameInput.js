import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <section>
      What is the name for this order?
      <input onChange={(e) => setOrderName(e.target.value)} />
    </section>
  );
}
