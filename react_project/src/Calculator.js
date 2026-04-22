import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Simple Calculator</h3>
      <input type="number" onChange={(e) => setNum1(+e.target.value)} />
      <input type="number" onChange={(e) => setNum2(+e.target.value)} />
      <button onClick={() => setResult(num1 + num2)}>Sum</button>
      <p>Result: {result}</p>
    </div>
  );
}
export default Calculator;