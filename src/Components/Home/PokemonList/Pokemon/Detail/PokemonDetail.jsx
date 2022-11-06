import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./PokemonDetail.scss";
import CardInfo from "./CardInfo";
const PokemonDetail = () => {
  const [openBall, setOpenBall] = useState(false);
  const { id } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [mainPhoto, setMainPhoto] = useState(null);

  const getPoke = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon(data);
    setMainPhoto(data.sprites.front_default);
  };

  useEffect(() => {
    getPoke();
  }, []);

  const openPokemon = () => {
    setOpenBall(true);
  };

  return (
    pokemon && (
      <section className="PokemonDetailPage">
        <Link className="goBack" to="/">
          <img src={process.env.PUBLIC_URL + "/pokeball.png"} alt="" />
        </Link>
        <div className="PokemonDetail">
          <div className="PokemonDetail__bg"></div>
          <div className={openBall ? "Card active" : "Card"}>
            <div className="cardPhoto">
              <img src={mainPhoto} alt="" />
            </div>
            <div className="otherCardPhotos">
              <div
                className="container"
                onClick={() => setMainPhoto(pokemon.sprites.front_default)}
              >
                <img src={pokemon.sprites.front_default} alt="" />
              </div>
              <div
                className="container"
                onClick={() => setMainPhoto(pokemon.sprites.back_default)}
              >
                <img src={pokemon.sprites.back_default} alt="" />
              </div>
              <div
                className="container"
                onClick={() => setMainPhoto(pokemon.sprites.front_shiny)}
              >
                <img src={pokemon.sprites.front_shiny} alt="" />
              </div>
              <div
                className="container"
                onClick={() => setMainPhoto(pokemon.sprites.back_shiny)}
              >
                <img src={pokemon.sprites.back_shiny} alt="" />
              </div>
            </div>
            <CardInfo pokemon={pokemon} />
          </div>
        </div>
        <div
          onClick={() => openPokemon()}
          className={openBall ? "pokeBall active" : "pokeBall"}
        >
          <div className="pokeBallTop"></div>
          <div className="pokeBallBottom">
            <div className="pokeBallBottomOpen"></div>
          </div>
        </div>
      </section>
    )
  );
};

export default PokemonDetail;
