import { useRef } from "react";
import { useGlobalContext } from "../../../context";
import "./Search.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const Search = () => {
  const { setSearch, setPokemons, nextUrl, prevUrl, setUrl } =
    useGlobalContext();
  const searchVal = useRef("");

  return (
    <>
      <header className="searchArea">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            ref={searchVal}
            placeholder="Search Pokemon"
            onChange={(e) => setSearch(e.target.value)}
          />
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
