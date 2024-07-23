

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
import { usePokemon } from '@/context/PokemonContext';
  

const PaginationComponent = () => {
  const {pokemonData,currentPage, handleGoToNextPage, handleGoToPreviousPage} = usePokemon();
  return (
    <Pagination>
    <PaginationContent>
      {pokemonData && pokemonData?.previous && <PaginationItem>
        <PaginationPrevious onClick={() => handleGoToPreviousPage()} />
      </PaginationItem>}
      <PaginationItem>
        <PaginationLink href="#">{currentPage}</PaginationLink>
      </PaginationItem>
      
      {pokemonData && pokemonData?.next &&<PaginationItem>
        <PaginationNext onClick={() => handleGoToNextPage()} />
      </PaginationItem>}
    </PaginationContent>
  </Pagination>
  
  )
}

export default PaginationComponent;