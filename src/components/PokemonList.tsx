import { usePokemon } from "@/context/PokemonContext";

import PokemonItemCard from "./PokemonItemCard";
import PaginationComponent from "./PaginationComponent";


const PokemonList = () => {
  const { pokemonData } = usePokemon();

  return (
    <div className="flex flex-col gap-8">
      {pokemonData && pokemonData.results?.length > 0 ? (
        <>
            <section className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
              {pokemonData.results.map((pokemon, index) => (
                <PokemonItemCard pokemon={pokemon} key={index} />
              ))}
            </section>

            <PaginationComponent />
        </>
        
      ) : (
        <p className="col-span-full">No results found for this search term!</p>
      )}
      
    </div>
  );
};

export default PokemonList;
