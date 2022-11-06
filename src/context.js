import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const [loading, setLoading] = useState(false);

  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const fetchPokeData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log(data);
      setNextUrl(data.next);
      setPrevUrl(data.previous);

      data.results.map(async (i) => {
        const res = await fetch(i.url);
        const newData = await res.json();
        setPokemons((state) => [...state, newData]);
      });
      if (pokemons) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokeData();
  }, [url]);

  return (
    <AppContext.Provider
      value={{
        loading,
        pokemons,
        setLoading,
        setPokemons,
        nextUrl,
        prevUrl,
        setUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
