import React, { useState } from 'react';

const DropdownMenu = ({ fruits }) => {
  const [fruit, setFruit] = useState('');
  const handleFruit = (e) => {
    setFruit(e.target.value);
  };
  return (
    <div
      style={{
        margin: '3rem',
        border: '3px solid green',
        borderRadius: '1rem',
        padding: '3rem',
        fontSize: '1.3rem',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Fruits and the Advantage</h2>
      {fruit === '' ? <p>No fruits</p> : <p>{fruit}</p>}
      <select
        onChange={handleFruit}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          marginTop: '1rem',
          width: '100%',
        }}
      >
        <option>--select the Fruits--</option>
        {fruits.map((fruit, index) => (
          <option key={index} value={fruit.advantage}>
            {fruit.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
