interface PokemonObj {
    name: string
    url: string
}

export interface PokemonData {
    count: number
    next: string | null
    previous: string | null
    results: PokemonObj[]
}

export interface PokemonCardProps {
    pokemon: PokemonObj
}

export interface PokemonContextType {
    pokemonData: PokemonData | null;
    setPokemonData: React.Dispatch<React.SetStateAction<PokemonData | null>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    fetchPokemonData: () => Promise<void>;
    handleGoToNextPage: () => Promise<void>;
    handleGoToPreviousPage: () => Promise<void>;
    currentPokemon: Pokemon | null;
    setCurrentPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  }

export interface StatObj {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface MoveObj{
    move:{
        name: string;
        url: string;
    }
}

export interface AbilityObj{
    ability:{
        name: string;
        url: string;
    }
}