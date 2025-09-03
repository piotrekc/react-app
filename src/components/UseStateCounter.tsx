import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{'Component Counter'}</h2>
      <button 
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={() => setCount(count + 1)}>{'Increment'}</button>
        <p>{count}</p>
    </div>
  );
};

export default UseStateCounter;