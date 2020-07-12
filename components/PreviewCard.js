import React, { useState } from 'react';

export default function PreviewCard({ property }) {
  let counter = 0;
  const [count, setstate] = useState(counter);
  //   console.warn(property);

  const handleCount = () => {
    setstate(count + 1);
  };

  return (
    <>
      <h2>{/* {property.state}. {property.city} {property.price} */}</h2>
      <div>{count}</div>
      <button onClick={handleCount}>INCREASE</button>
    </>
  );
}
