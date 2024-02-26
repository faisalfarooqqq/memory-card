import React, { useState, useEffect } from 'react';
import CardList from './CardList';

const Game = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetchPokemon();
    document.title = 'Memory Card Game';
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=8');
      const data = await response.json();
      const pokemonUrls = data.results.map((pokemon) => pokemon.url);
      const pokemonData = await Promise.all(
        pokemonUrls.map(async (url) => {
          const res = await fetch(url);
          return await res.json();
        })
      );

      const uniquePokemon = [];
      const seen = new Set();
      pokemonData.forEach((pokemon) => {
        if (!seen.has(pokemon.id)) {
          uniquePokemon.push(pokemon);
          seen.add(pokemon.id);
        }
      });

      setPokemonList(uniquePokemon);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  const handleCardClick = (id) => {
    if (!clickedCards.includes(id)) {
     
      const shuffledPokemonList = [...pokemonList].sort(() => Math.random() - 0.5);
      setPokemonList(shuffledPokemonList);

      
      setScore(score + 1);
      setClickedCards([...clickedCards, id]);
    } else {
      handleGameOver();
    }
  };

  const handleGameOver = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setClickedCards([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Score: {score}</h2>
      <h2 className="text-2xl font-semibold mb-4">Best Score: {bestScore}</h2>
      <CardList pokemonList={pokemonList} onCardClick={handleCardClick} />
    </div>
  );
};

export default Game;
