import React, { useCallback, useContext, useState } from 'react';
import Child from './Child';
import UseStateCounter from './UseStateCounter';
import UseEffect from './UseEffect'
import UseMemo from './UseMemo';
import Child2 from './Child2';
import CustomComponent from './Custom';
import ThemeContext from '../context/ThemeContext';
import useToggle from '../hooks/useToggle'

const Parent: React.FC = () => {
  console.log(`Parent - render`);
  const message: string = 'Welcome from Parent';

  const [count, setCount] = useState<number>(0);

  // const increase = () => setCount(count => count + 1);

  const increase = useCallback(() => {
    console.log(`Parent - render - useCallback`);
    setCount(count => count + 1)
  }, []);


  const handleChildClick = (childData: string): void => {
    console.log(`Parent - Child has send: ${childData}`);
  };

 const theme = useContext(ThemeContext); // "dark"
  const [isOpen, toggleOpen] = useToggle();

  return (
    <div>
      <h1>Component Parent</h1>
      <div>Current theme - useContext: {theme}</div>
      <div>
        <p>Custom hook</p>
      <button onClick={ toggleOpen }>
        {isOpen ? "Close" : "Open"}
      </button>

        </div>
      {/* <Child text={message} onButtonClick={handleChildClick} /> */}
      {/* <Child2 count={count} onButtonClick={handleChildClick}/> */}
      {/* <UseStateCounter count={count} setCount={setCount}/> */}
      <UseStateCounter count={count} setCount={increase}/>
      <CustomComponent count={count} setCount={increase}/>
      {/* <UseEffect count={count}/> */}
      {/* <UseMemo count={count}/> */}
    </div>
  );
};

export default Parent;