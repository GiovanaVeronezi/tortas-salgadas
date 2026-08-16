import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Tortas from "./pages/Tortas";
import TortaDetalhes from "./pages/TortaDetalhes";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tortas"
          element={<Tortas />}
        />

        <Route
          path="/tortas/:id"
          element={<TortaDetalhes />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;