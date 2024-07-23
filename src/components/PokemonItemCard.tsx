

import {Card} from "@/components/ui/card"

import { PokemonCardProps } from '@/types'
import { Link } from 'react-router-dom'

const PokemonItemCard = ({pokemon} : PokemonCardProps) => {
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
        <Card className="p-4 hover:cursor-pointer hover:bg-[#F8CC47] hover:text-[#0D1419] hover:font-semibold">
          <p>{pokemon.name}</p>
        </Card>
    </Link>
  )
}

export default PokemonItemCard