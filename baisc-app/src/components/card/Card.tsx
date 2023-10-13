import { Pokemon } from "../../App";
import "./card.styles.css";

type CardProps = {
  pokemon: Pokemon;
};

export default function Card({ pokemon }: CardProps) {
  return (
    <div className="card-container">
      <img src="" alt={`Pokemon ${pokemon.name}`} />
      <h2>{pokemon.name}</h2>
    </div>
  );
}
