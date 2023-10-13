import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchBox/SearchBox";
import { getData } from "./utils/data.utils";
import "./App.css";

interface Data {
  results: [];
}

export type Pokemon = {
  name: string;
  url: string;
};

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonList = await getData<Data>(
        "https://pokeapi.co/api/v2/pokemon/"
      );
      setPokemons(pokemonList.results);
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const newFilteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchField);
    });

    setFilteredPokemons(newFilteredPokemons);
  }, [pokemons, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Pokédex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search for pokemons"
      />
      <CardList pokemons={filteredPokemons} />
    </div>
  );
}
