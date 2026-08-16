import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tortas from "./pages/Tortas";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/tortas" element={<Tortas />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;