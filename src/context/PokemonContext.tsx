import { useState,useEffect, useContext } from "react";
import { PokemonContextType, PokemonData } from "@/types";

import { createContext } from "react";
import { getPokemonList } from "@/services/pokeApi";

const PokemonContext = createContext<PokemonContextType | null>(null);

export const PokemonProvider = ({children}:{children:React.ReactNode})=>{
    const [pokemonData,setPokemonData] = useState<PokemonData | null>(null);
    const [currentPage, setCurrentPage ] = useState<number>(1);
    const [currentPokemon, setCurrentPokemon] = useState(null);

    const fetchPokemonData = async () =>{
        const data = await getPokemonList();
        setPokemonData(data);
    };

    const handleGoToNextPage = async () =>{
        if(pokemonData && pokemonData.next){
         setCurrentPage(currentPage + 1);
         const response = await fetch(pokemonData?.next);
         const data = await response.json();
         setPokemonData(data)
        }
       }
     
       const handleGoToPreviousPage = async () =>{
        if(pokemonData && pokemonData.previous){
         setCurrentPage(currentPage - 1);
         const response = await fetch(pokemonData?.previous);
         const data = await response.json();
         setPokemonData(data)
        }
       }

       useEffect(() => {
        fetchPokemonData();
    },[])

    

    return (
    <PokemonContext.Provider value={{
        pokemonData, 
        setPokemonData, 
        currentPage, 
        setCurrentPage, 
        fetchPokemonData,
        handleGoToNextPage, 
        handleGoToPreviousPage,
        currentPokemon,
        setCurrentPokemon
    }}>
        {children}
    </PokemonContext.Provider>
    );
}


export function usePokemon() {
    const context = useContext(PokemonContext);
  
    if (!context) {
      throw new Error("usePokemon must be used within a PokemonProvider");
    }
  
    return context;
  }
