import { useGlobalContext } from "../../../context";
import Loading from "../../Loading/Loading";
import Pokemon from "./Pokemon/Pokemon";
import "./PokemonList.scss";

const PokemonList = () => {
  const { pokemons, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="pokemonList">
      {pokemons.map((poke) => {
        return <Pokemon id={poke.id} {...poke} />;
      })}
    </section>
  );
};

export default PokemonList;
