import React, { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]            
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner 
    ? `Winner: ${winner}` 
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (winner || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => (
    <button 
      style={squareStyle} 
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </button>
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Tic-Tac-Toe Game</h3>
      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>{status}</div>
      <div style={boardRowStyle}>
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div style={boardRowStyle}>
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div style={boardRowStyle}>
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <button 
        style={{ marginTop: '20px', padding: '5px 15px' }}
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Restart Game
      </button>
    </div>
  );
}

const squareStyle = {
  width: '60px',
  height: '60px',
  fontSize: '24px',
  fontWeight: 'bold',
  cursor: 'pointer',
  margin: '-1px',
  border: '1px solid #999'
};

const boardRowStyle = {
  display: 'flex',
  justifyContent: 'center'
};

export default TicTacToe;