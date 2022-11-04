import { useGlobalContext } from "../../../context";
import Loading from "../../Loading/Loading";
import Pokemon from "./Pokemon/Pokemon";
import "./PokemonList.scss";

const PokemonList = () => {
  const { pokemons, loading, search } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="pokemonList">
      {search === ""
        ? pokemons.map((poke) => {
            return <Pokemon id={poke.id} {...poke} />;
          })
        : search !== ""
        ? pokemons
            .filter((poke) =>
              poke.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((poke) => {
              return <Pokemon id={poke.id} {...poke} />;
            })
        : false}
    </section>
  );
};

export default PokemonList;
