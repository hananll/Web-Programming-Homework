import React, { useState } from 'react';
import Calculator from './components/Calculator';
import TicTacToe from './components/TicTacToe'; 
import PizzaAxios from './PizzaAxios';

function App() {
  const [menu, setMenu] = useState('home');

  return (
    <div className="App">
      <nav style={{ background: '#282c34', padding: '10px', textAlign: 'center' }}>
        <button onClick={() => setMenu('home')}>Home</button>
        <button onClick={() => setMenu('spa')}>SPA Apps</button>
        <button onClick={() => setMenu('axios')}>Axios MySQL</button>
      </nav>

      <div style={{ padding: '20px' }}>
        {menu === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h1>Welcome to Pizza Project</h1>
            <p>React Version of our Homework</p>
          </div>
        )}

        {menu === 'spa' && (
          <div>
            <Calculator />
            <hr />
            <TicTacToe /> 
          </div>
        )}

        {menu === 'axios' && <PizzaAxios />}
      </div>
    </div>
  );
}

export default App;