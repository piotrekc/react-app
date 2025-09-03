import React from 'react';
import Child from './Child';
import UseStateCounter from './UseStateCounter';

const Parent: React.FC = () => {
  const message: string = 'Welcome from Parent';

  const handleChildClick = (childData: string): void => {
    console.log(`Parent - Child has send: ${childData}`);
  };

  return (
    <div>
      <h1>Component Parent</h1>
      <Child text={message} onButtonClick={handleChildClick} />
      <UseStateCounter/>
    </div>
  );
};

export default Parent;