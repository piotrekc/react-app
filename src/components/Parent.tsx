import React, { useContext, useState } from 'react';
import Child from './Child';
import UseStateCounter from './UseStateCounter';
import UseEffect from './UseEffect'
import Child2 from './Child2';
import ThemeContext from '../context/ThemeContext';

const Parent: React.FC = () => {
  const message: string = 'Welcome from Parent';

  const [count, setCount] = useState<number>(0);

  const handleChildClick = (childData: string): void => {
    console.log(`Parent - Child has send: ${childData}`);
  };

 const theme = useContext(ThemeContext); // "dark"

  return (
    <div>
      <h1>Component Parent</h1>
      <div>Current theme - useContext: {theme}</div>
      <Child text={message} onButtonClick={handleChildClick} />
      <Child2 count={count} onButtonClick={handleChildClick}/>
      <UseStateCounter count={count} setCount={setCount}/>
      <UseEffect count={count}/>
    </div>
  );
};

export default Parent;