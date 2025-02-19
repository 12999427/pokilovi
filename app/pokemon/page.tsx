import Link from 'next/link';
import PokemonDetail from '../components/PokemonDetail';
import { Pokemon } from '../types/pokemon';

async function getPokemonList() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const data = await res.json();
  return data.results;
}

export default async function PokemonListPage() {
  const pokemonList = await getPokemonList();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-8">
      <h1 className="text-5xl font-extrabold text-center text-white mb-10">
        Pokémon List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonList.map(async (pokemon: { name: string }) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const pokemonData: Pokemon = await res.json();
          return (
            <Link key={pokemonData.name} href={`/pokemon/${pokemonData.name}`}>
              <div className="hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-lg p-4 bg-white">
                <PokemonDetail pokemon={pokemonData} scale={160} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
