// src/components/Counter.jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      {/* Increment button */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* Decrement button */}
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      {/* Reset button */}
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
