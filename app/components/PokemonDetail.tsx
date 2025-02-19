import Image from 'next/image';
import { Pokemon } from '../types/pokemon';

interface PokemonDetailProps {
  pokemon: Pokemon;
  scale: number;
}

export default function PokemonDetail({ pokemon, scale }: PokemonDetailProps) {
  return (
    <div className="card bg-green-700 shadow-xl">
      <figure className="px-4 pt-4">
        <Image
          src={pokemon.sprites.front_default} alt={pokemon.name}
          width={scale} height={scale} className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-bold capitalize">
          {pokemon.name}
        </h2>
        <div className="flex gap-2">
          <div className="badge badge-secondary">Height: {pokemon.height}</div>
          <div className="badge badge-warning">Weight: {pokemon.weight}</div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Types:</p>
          <div className="flex gap-2">
            {pokemon.types.map((type, index) => (
              <div key={index} className="badge badge-outline">
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}