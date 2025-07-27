import { Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { HomePage } from "./pages/homePage";
import { CadastroCurriculo } from "./pages/CadastroCurriculo";
import { LoginCurriculo } from "./pages/LoginCurriculo";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/curriculo" element={<CadastroCurriculo />} />
      <Route path="/login-candidato" element={<LoginCurriculo />} />
    </Routes>
  )
}

export default App
