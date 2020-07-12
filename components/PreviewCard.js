import React, { useState } from 'react';

export default function PreviewCard({ name }) {
  let counter = 0;
  const [count, setstate] = useState(counter);

  const handleCount = () => {
    setstate(count + 1);
  };

  return (
    <>
      <h2>{name}.</h2>
      <div>{count}</div>
      <button onClick={handleCount}>INCREASE</button>
    </>
  );
}
