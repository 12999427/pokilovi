"use client";

import Image from 'next/image';
import { Pokemon } from '../types/pokemon';

interface PokemonDetailProps {
  pokemon: Pokemon;
  scale: number;
}

export default function PokemonDetail({ pokemon, scale }: PokemonDetailProps) {
  return (
    <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg shadow-xl p-6">
      <div className="flex justify-center mb-6">
        <Image
          src={pokemon.sprites.front_default} alt={pokemon.name}
          width={scale} height={scale} className="rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center text-white">
        <h2 className="text-4xl font-extrabold capitalize mb-4">
          {pokemon.name}
        </h2>
        <div className="flex justify-center gap-3 mb-4">
          <div className="bg-green-800 text-white py-2 px-4 rounded-full">
            Height: {pokemon.height}
          </div>
          <div className="bg-yellow-500 text-black py-2 px-4 rounded-full">
            Weight: {pokemon.weight}
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold mb-2">Types:</p>
          <div className="flex justify-center gap-4">
            {pokemon.types.map((type, index) => (
              <div key={index} className="bg-gray-700 text-white py-1 px-4 rounded-full">
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
