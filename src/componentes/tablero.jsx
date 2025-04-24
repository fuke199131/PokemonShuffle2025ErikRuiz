import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import { shufflePokemon } from '../datos/pokemons.js';

const Board = () => {
  const [board, setBoard] = useState(generateBoard());
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Genera el tablero con Pokémon aleatorios
  function generateBoard() {
    const rows = 6;
    const cols = 6;
    let newBoard = [];

    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        const randomPokemon = shufflePokemon[Math.floor(Math.random() * shufflePokemon.length)];
        row.push(randomPokemon);
      }
      newBoard.push(row);
    }
    return newBoard;
  }

  // Detecta combinaciones de tres o más Pokémon
  function checkMatches() {
    let matches = [];
    // Horizontal
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length - 2; col++) {
        if (
          board[row][col].id === board[row][col + 1].id &&
          board[row][col].id === board[row][col + 2].id
        ) {
          matches.push({ type: 'horizontal', row, col });
        }
      }
    }

    // Vertical
    for (let col = 0; col < board[0].length; col++) {
      for (let row = 0; row < board.length - 2; row++) {
        if (
          board[row][col].id === board[row + 1][col].id &&
          board[row][col].id === board[row + 2][col].id
        ) {
          matches.push({ type: 'vertical', row, col });
        }
      }
    }

    return matches;
  }

  // Elimina las combinaciones encontradas y actualiza la puntuación
  function removeMatches(matches) {
    let newBoard = [...board];
    let points = 0;

    matches.forEach((match) => {
      if (match.type === 'horizontal') {
        for (let i = 0; i < 3; i++) {
          newBoard[match.row][match.col + i] = null; // Elimina los Pokémon
        }
        points += 100; // Incrementa la puntuación
      }

      if (match.type === 'vertical') {
        for (let i = 0; i < 3; i++) {
          newBoard[match.row + i][match.col] = null; // Elimina los Pokémon
        }
        points += 100; // Incrementa la puntuación
      }
    });

    setScore(score + points); // Aumenta la puntuación global
    setBoard(newBoard);
    return points;
  }

  // Rellena las casillas vacías con nuevos Pokémon
  function refillBoard() {
    let newBoard = [...board];
    for (let row = 0; row < newBoard.length; row++) {
      for (let col = 0; col < newBoard[row].length; col++) {
        if (newBoard[row][col] === null) {
          const randomPokemon = shufflePokemon[Math.floor(Math.random() * shufflePokemon.length)];
          newBoard[row][col] = randomPokemon;
        }
      }
    }
    setBoard(newBoard);
  }

  // Función de animación y detección de combinaciones
  useEffect(() => {
    if (!isAnimating) {
      const matches = checkMatches();
      if (matches.length > 0) {
        const points = removeMatches(matches);
        setIsAnimating(true); // Activar animación
        setTimeout(() => {
          refillBoard(); // Rellenar las casillas vacías después de la animación
          setIsAnimating(false); // Desactivar animación
        }, 500); // Espera para terminar la animación
      }
    }
  }, [board, isAnimating]);

  // Función para manejar el clic en una loseta
  const handleTileClick = (rowIndex, colIndex) => {
    if (isAnimating) return;

    const newBoard = [...board];
    const temp = newBoard[rowIndex][colIndex];
    if (colIndex + 1 < board[rowIndex].length) {
      newBoard[rowIndex][colIndex] = newBoard[rowIndex][colIndex + 1];
      newBoard[rowIndex][colIndex + 1] = temp;
      setBoard(newBoard);
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((pokemon, colIndex) => (
            <Tile
              key={colIndex}
              pokemon={pokemon}
              onClick={() => handleTileClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
      <div className="score">
        <h2>Score: {score}</h2>
      </div>
    </div>
  );
};

export default Board;