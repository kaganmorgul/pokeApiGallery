import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import PokemonDetail from "./Components/Home/PokemonList/Pokemon/Detail/PokemonDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
