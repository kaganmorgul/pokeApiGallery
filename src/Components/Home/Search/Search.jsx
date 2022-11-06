import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../../context";
import { Link } from "react-router-dom";
import "./Search.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const Search = () => {
  const { setPokemons, nextUrl, prevUrl, setUrl } = useGlobalContext();
  const searchVal = useRef("");
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  console.log(searchList);

  const getAllPoke = async () => {
    try {
      const poke = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const data = await poke.json();
      getAllPokeData(data.results);
    } catch (error) {}
  };
  const getAllPokeData = async (data) => {
    data.map(async (i) => {
      const data = await fetch(i.url);
      const getAll = await data.json();
      setSearchList((state) => [...state, getAll]);
    });
  };
  useEffect(() => {
    getAllPoke();
  }, []);

  return (
    <>
      <header className="searchArea">
        <form className="form" action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            ref={searchVal}
            placeholder="Search Pokemon"
            onKeyUp={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && (
            <div className="searchList">
              {searchList
                .filter((poke) =>
                  poke.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((poke) => {
                  return (
                    <ul>
                      <li>
                        <img src={poke.sprites.front_default} alt="" />
                        <p>{poke.name}</p>
                        <Link to={`/pokemon/${poke.id}`}>
                          {" "}
                          <img
                            className="pokeball"
                            src={process.env.PUBLIC_URL + "/pokeball.png"}
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  );
                })}
            </div>
          )}
        </form>
        <div className="controls">
          <button
            disabled={prevUrl ? false : true}
            onClick={() => {
              setPokemons([]);
              setUrl(prevUrl);
            }}
          >
            <BsArrowLeftCircle />
          </button>
          <button
            disabled={nextUrl ? false : true}
            onClick={() => {
              setPokemons([]);
              setUrl(nextUrl);
            }}
          >
            <BsArrowRightCircle />
          </button>
        </div>
      </header>
    </>
  );
};

export default Search;
