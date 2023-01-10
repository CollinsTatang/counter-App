import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((PreCount) => PreCount - 1);
  }

  function incrementCount() {
    setCount((PreCount) => PreCount + 1);
  }
  return (
    <div>
      <button onClick={decrementCount} type="button">-</button>
      <span>{count}</span>
      <button onClick={incrementCount} type="button">+</button>
    </div>
  );
}

export default App;
