import PokemonDetail from '../../components/PokemonDetail';
import { Pokemon } from '../../types/pokemon';

interface PokemonDetailProps {
	params: { id: string };
}

export default async function PokemonDetailPage({ params }: PokemonDetailProps) {
	// Fetch dei dati del Pokémon con SSR (cache disabilitata)
	const { id } = await params
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		cache: 'no-store', // Disabilita la cache per SSR
	});
	const pokemon: Pokemon = await res.json();
	return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <PokemonDetail pokemon={pokemon} scale={300} />
    </div>
  );
}