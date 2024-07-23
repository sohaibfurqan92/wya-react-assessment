import { Route, Routes } from "react-router-dom"
import Home from "@/components/Home"
import PokemonDetails from "./components/PokemonDetails"




function App() {

  return (
    <section className="container mx-auto my-5">
        <h1 className="text-3xl text-center mb-5">Sohaib's PokeDex</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
    </section>
    
  )
}

export default App
