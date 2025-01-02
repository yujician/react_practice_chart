import { useState, ChangeEvent } from 'react';

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonSprites = {
  front_default: string;
};

type Pokemon = {
  sprites: PokemonSprites;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
};

type UsePokemon = () => {
  handleSetQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchPokemon: () => Promise<void>;
  pokemon: Pokemon | null;
  error: string;
  query: string;
};

export const usePokemon: UsePokemon = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchPokemon = async () => {
    setPokemon(null);
    setError('');
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      const data = (await response.json()) as Pokemon;
      setPokemon(data);
    } catch (error) {
      setError('ポケモンが見つかりません');
    }
  };

  return { handleSetQuery, fetchPokemon, pokemon, error, query };
};
