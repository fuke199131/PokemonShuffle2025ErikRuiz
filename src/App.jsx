import React, { useState } from 'react';
import Board from './components/Board';
import Score from './components/Score';

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <h1>Pokémon Shuffle</h1>
      <Score score={score} />
      <Board />
    </div>
  );
};

export default App;