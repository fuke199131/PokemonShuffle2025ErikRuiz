import React from 'react';

const Tile = ({ pokemon, onClick, animations }) => {
  const getAnimation = () => {
    if (animations.length === 0) return '';
    return animations.map((anim) => {
      if (anim.type === 'fadeOut') return 'fadeOut';
      if (anim.type === 'fadeIn') return 'fadeIn';
      if (anim.type === 'slide') return 'slide';
      return '';
    }).join(' ');
  };

  return (
    <div className={`tile ${getAnimation()}`} onClick={onClick}>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
};

export default Tile;