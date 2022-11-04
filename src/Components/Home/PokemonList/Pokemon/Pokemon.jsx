import { Link } from "react-router-dom";
import "./Pokemon.scss";
const Pokemon = (i) => {
  return (
    <div className="pokemon">
      <div
        className="pokemonBg"
        style={{ backgroundImage: `url(${i.sprites.front_default})` }}
      ></div>
      <h1>{i.name}</h1>
      <img src={i.sprites.front_default} alt="" />
      <div className="detailLink">
        <Link to={`/pokemon/${i.id}`}>
          <img src={process.env.PUBLIC_URL + "/pokeball.png"} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Pokemon;
