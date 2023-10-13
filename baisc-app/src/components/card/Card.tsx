import { useEffect, useState } from "react";
import { Pokemon } from "../../App";
import { getData } from "../../utils/data.utils";
import "./card.styles.css";

type CardProps = {
  pokemon: Pokemon;
};

interface FetchedJsonData {
  sprites: Sprites;
  types: Type[];
}

interface Sprites {
  front_default: string;
  front_shiny: string;
}

interface Type {
  type: Type2;
}

interface Type2 {
  name: string;
  url: string;
}

type ExtraPokemonInfo = {
  image: string;
  type: string[];
};

export default function Card({ pokemon }: CardProps) {
  const [extraPokemonInfo, setExtraPokemonInfo] = useState<ExtraPokemonInfo>({
    image: "",
    type: [],
  });

  useEffect(() => {
    const fetchedExtraInfo = async () => {
      const extraInfoList = await getData<FetchedJsonData>(pokemon.url);
      setExtraPokemonInfo({
        image: extraInfoList.sprites.front_default,
        type: extraInfoList.types.map((type) => type.type.name),
      });
    };
    fetchedExtraInfo();
  }, []);

  return (
    <div className="card-container">
      <img src={extraPokemonInfo.image} alt={`Pokemon ${pokemon.name}`} />
      <h2>{pokemon.name}</h2>
      <p>type: {extraPokemonInfo.type.toString().split(",").join(", ")}</p>
    </div>
  );
}
