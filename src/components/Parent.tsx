import React, { useState } from 'react';
import Child from './Child';
import UseStateCounter from './UseStateCounter';
import UseEffect from './UseEffect'
import Child2 from './Child2';

const Parent: React.FC = () => {
  const message: string = 'Welcome from Parent';

  const [count, setCount] = useState<number>(0);

  const handleChildClick = (childData: string): void => {
    console.log(`Parent - Child has send: ${childData}`);
  };

  return (
    <div>
      <h1>Component Parent</h1>
      <Child text={message} onButtonClick={handleChildClick} />
      <Child2 count={count} onButtonClick={handleChildClick}/>
      <UseStateCounter count={count} setCount={setCount}/>
      <UseEffect count={count}/>
    </div>
  );
};

export default Parent;