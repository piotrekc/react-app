import React, { useEffect } from 'react';

interface UseEffectProps {
  count: number;
}

const UseEffect: React.FC<UseEffectProps> = ({ count }) => {
console.log(`UseEffect - count: ${count}`);
    useEffect(() => {
        console.log(`UseEffect - useEffect!! - count: ${count}`);
    }, [count]);

  return (
    <div>
      <h2>{'Component UseEffect'}</h2>
      <p>{`Count: ${count}`}</p>
    </div>
  );
};

export default UseEffect;