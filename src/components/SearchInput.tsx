import { useEffect, useState } from "react";

import { usePokemon } from "@/context/PokemonContext";
import { getPokemonDetails, getPokemonList } from "@/services/pokeApi";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<null | string>(null);

  const {setPokemonData} = usePokemon();


 
  const searchPokemon =async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(!searchTerm) return;
    const pokemon = await getPokemonDetails(searchTerm);
    let pokemonResults =  null;

    if(pokemon){
      pokemonResults = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: pokemon.name,
            url: pokemon.url || null
          }
        ]
      }
      
    }
    
    setPokemonData(pokemonResults);
  }

  useEffect(()=>{
    // when the searchTerm is null, get all pokemons
    const getAllPokemon = async()=>{
      const allPokemon = await getPokemonList();
      setPokemonData(allPokemon)
    }
    if(!searchTerm){
     getAllPokemon();
    }
  },[searchTerm]);

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 "> 
        <Input type="text" placeholder="Search for a pokemon" defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <Button type="submit" 
        className='bg-[#F8CC47] text-[#0D1419] hover:text-white' 
        onClick={(e)=> searchPokemon(e)}
        disabled={!searchTerm}
        >
          Search
        </Button>
      </div>
  )
}

export default SearchInput