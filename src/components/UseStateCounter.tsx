import React from 'react';

interface UseStateCounterProps {
  count: number;
  setCount: (childData: number) => void;
}

const UseStateCounter: React.FC<UseStateCounterProps> = ({ count, setCount }) => {

  return (
    <div>
      <h2>{'useState - Component Counter'}</h2>
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