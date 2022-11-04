import PokemonList from "./PokemonList/PokemonList";
import Search from "./Search/Search";
import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <Search />
      <PokemonList />
    </div>
  );
};

export default Home;
