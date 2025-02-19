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
    <div className="min-h-screen bg-base-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokémon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {pokemonList.map(async (pokemon: { name: string }) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const pokemonData: Pokemon = await res.json();
          return (
            <Link key={pokemonData.name} href={`/pokemon/${pokemonData.name}`}>
              <div className="hover:scale-105 transition-transform duration-300">
                <PokemonDetail pokemon={pokemonData} scale={150} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}