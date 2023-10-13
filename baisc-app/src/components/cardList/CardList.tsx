import Card from '../card/Card'
import { Pokemon } from '../../App'
import './cardList.styles.css'

type CardListProps = {
pokemons: Pokemon[]
}

export default function CardList({pokemons}: CardListProps) {
  return (
    <div className='card-list'>
      {
        pokemons.map((pokemon) => {
          return <Card key={pokemon.name} pokemon={pokemon}/>
        })
      }
      
    </div>
  )
}
