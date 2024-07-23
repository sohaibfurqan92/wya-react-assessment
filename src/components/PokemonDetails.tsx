import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { usePokemon } from "@/context/PokemonContext";
import { getPokemonDetails } from "@/services/pokeApi";
import { getPokemonDescription } from "@/utils";
import { AbilityObj, MoveObj, StatObj } from "@/types";

const PokemonDetails = () => {

  const {name} = useParams();
  const {currentPokemon,setCurrentPokemon} = usePokemon();

  

  useEffect(()=>{
    const getCurrentPokemon = async () => {
      const data = await getPokemonDetails(name!);
      setCurrentPokemon(data);
    }
   name &&  getCurrentPokemon();
  },[name]);

 
  

  return (
    <div className="flex flex-col gap-5">
      <Link to="/"> &larr; Go back home</Link>
      <h2 className="font-bold text-3xl">{name?.toUpperCase()}</h2>
      <img src={currentPokemon?.sprites?.front_default} alt={name} className="w-[200px] h-auto object-cover"/>
      <p className="first-letter:capitalize mb-6">{getPokemonDescription(name!, currentPokemon?.base_experience, currentPokemon?.abilities?.length, currentPokemon?.moves?.length, currentPokemon?.weight, currentPokemon?.height)}</p>
      <Tabs defaultValue="stats" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="stats">Stats</TabsTrigger>
        <TabsTrigger value="abilities">Abilities</TabsTrigger>
        <TabsTrigger value="moves">moves</TabsTrigger>
      </TabsList>
      <TabsContent value="stats">
        
        <p className="font-bold">Stats count: {currentPokemon?.stats?.length} ( A maximum of 5 displayed ) </p>
        {currentPokemon?.stats && <ul className="list-disc">
            {currentPokemon.stats.slice(0,5).map((statObj: StatObj,index:number)=> (
          
            <li key={index}>{statObj.stat.name}</li>
          ))}
        </ul>}
      </TabsContent>
      <TabsContent value="abilities">
      <p className="font-bold">Abilities count: {currentPokemon?.abilities?.length} ( A maximum of 5 displayed ) </p>
      {currentPokemon?.abilities && <ul className="list-disc">
            {currentPokemon.abilities.slice(0,5).map((abilityObj: AbilityObj,index:number)=> (
            <li key={index}>{abilityObj.ability.name}</li>
          ))}
        </ul>}
      </TabsContent>
      <TabsContent value="moves">
      <p className="font-bold">Moves count: {currentPokemon?.moves?.length} ( A maximum of 5 displayed ) </p>
      {currentPokemon?.moves && <ul className="list-disc">
        
            {currentPokemon.moves.slice(0,5).map((moveObj : MoveObj,index:number)=> (
            <li key={index}>{moveObj.move.name}</li>
          ))}
        </ul>}
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default PokemonDetails