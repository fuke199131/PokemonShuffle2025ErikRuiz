import React, { useEffect, useState } from 'react';
import shufflePokemon from '/workspaces/PokemonShuffle2025ErikRuiz/src/datos/Pokemons.js';

const BOARD_ROWS = 6;
const BOARD_COLS = 6;
const LEVEL_UP_SCORE = 10000


const getRandomPokemon = () => {
  const randomIndex = Math.floor(Math.random() * shufflePokemon.length);
  return shufflePokemon[randomIndex];
};


const generateBoard = () => {
  return Array.from({ length: BOARD_ROWS }, () =>
    Array.from({ length: BOARD_COLS }, () => getRandomPokemon())
  );
};


const playSound = (sound) => {
  const audio = new Audio(`/sounds/${sound}.mp3`);
  audio.play();
};

const Board = ({ playerProfile, setPlayerProfile, onGameOver }) => {
  const [board, setBoard] = useState(generateBoard());
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(playerProfile.score || 0);
  const [level, setLevel] = useState(playerProfile.level || 1);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('player-profile'));
    if (savedProfile) {
      setPlayerProfile(savedProfile);
      setScore(savedProfile.score);
      setLevel(savedProfile.level);
    }
  }, []);

  useEffect(() => {
    if (gameStarted) {
      const newProfile = { score, level };
      localStorage.setItem('player-profile', JSON.stringify(newProfile));
    }
  }, [score, level, gameStarted]);

  const handleClick = (row, col) => {
    if (!gameStarted) return;
    if (selected) {
      const [prevRow, prevCol] = selected;
      const isAdjacent =
        (Math.abs(prevRow - row) === 1 && prevCol === col) ||
        (Math.abs(prevCol - col) === 1 && prevRow === row);

      if (isAdjacent) {
        const newBoard = [...board.map(row => [...row])];
        const temp = newBoard[row][col];
        newBoard[row][col] = newBoard[prevRow][prevCol];
        newBoard[prevRow][prevCol] = temp;
        setBoard(newBoard);
        setTimeout(() => checkCombinations(newBoard), 300);
        playSound('move'); 
      }
      setSelected(null);
    } else {
      setSelected([row, col]);
    }
  };

  
  const checkCombinations = (boardToCheck) => {
    let found = false;
    const matches = Array.from({ length: BOARD_ROWS }, () => Array(BOARD_COLS).fill(false));

    for (let row = 0; row < BOARD_ROWS; row++) {
      for (let col = 0; col < BOARD_COLS - 2; col++) {
        if (
          boardToCheck[row][col].id === boardToCheck[row][col + 1].id &&
          boardToCheck[row][col].id === boardToCheck[row][col + 2].id
        ) {
          matches[row][col] = matches[row][col + 1] = matches[row][col + 2] = true;
          found = true;
        }
      }
    }

    for (let col = 0; col < BOARD_COLS; col++) {
      for (let row = 0; row < BOARD_ROWS - 2; row++) {
        if (
          boardToCheck[row][col].id === boardToCheck[row + 1][col].id &&
          boardToCheck[row][col].id === boardToCheck[row + 2][col].id
        ) {
          matches[row][col] = matches[row + 1][col] = matches[row + 2][col] = true;
          found = true;
        }
      }
    }

    if (found) {
      let newScore = score;
      const newBoard = boardToCheck.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (matches[rowIndex][colIndex]) {
            newScore += 10;
            return getRandomPokemon();
          }
          return cell;
        })
      );
      setScore(newScore);
      setBoard(newBoard);
      playSound('combo'); 

    
      setTimeout(() => checkCombinations(newBoard), 300);
    } else {
      if (score >= LEVEL_UP_SCORE * level) {
        setLevel(level + 1);
        playSound('level-up');
        alert(`¡Nivel ${level} superado!`);
      } else if (score >= LEVEL_UP_SCORE * (level + 1)) {
        onGameOver();
      }
    }
  };


  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center gap-4 mt-10">
        <h1 className="text-3xl font-bold">Pokémon Shuffle</h1>
        <button
          onClick={() => setGameStarted(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
        >
          Comenzar Juego
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-6 gap-1 p-2">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`bg-zinc-800 border-2 transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer
              ${selected && selected[0] === rowIndex && selected[1] === colIndex
                ? 'border-yellow-400'
                : 'border-transparent'}`}
            onClick={() => handleClick(rowIndex, colIndex)}
          >
            <img
              src={cell.image}
              alt={cell.name}
              className="w-12 h-12 transition-transform duration-300 hover:rotate-6"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
