import React from 'react';

interface ChildProps {
  text: string;
  onButtonClick: (childData: string) => void;
}

const Child: React.FC<ChildProps> = ({ text, onButtonClick }) => {
  const handleClick = () => {
    console.log('Child Hello parent');
    onButtonClick('Child Hello parent');
  };

  return (
    <div>
      <h2>{'Component Child'}</h2>
      <button 
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={handleClick}>{'Send to Parent'}</button>
        <p>{text}</p>
    </div>
  );
};

export default Child;