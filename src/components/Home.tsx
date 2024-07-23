

import PokemonList from "@/components/PokemonList"
import SearchInput from "@/components/SearchInput"

const Home = () => {
  return (
    <section>
        <div className="flex flex-col gap-6 items-center justify-center">
            <SearchInput/>
            <PokemonList/>
        </div>
  </section>
  )
}

export default Home