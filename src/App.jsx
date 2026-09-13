import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tortas from "./pages/Tortas";
import TortaDetalhes from "./pages/TortaDetalhes";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tortas" element={<Tortas />} />

        <Route path="/tortas/:id" element={<TortaDetalhes />} />

        <Route path="/sobre" element={<Sobre />} />

        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
