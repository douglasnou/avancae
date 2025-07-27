import { Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { HomePage } from "./pages/homePage";
import { CadastroCurriculo } from "./pages/CadastroCurriculo";
import { LoginCurriculo } from "./pages/LoginCurriculo";
import { LoginEmpresa } from "./pages/LoginEmpresa";
import { CadastroEmpresa } from "./pages/CadastroEmpresa";
import { ExampleOne } from "./pages/ExampleOne";
import { ExampleTwo } from "./pages/ExampleTwo";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/curriculo" element={<CadastroCurriculo />} />
      <Route path="/login-candidato" element={<LoginCurriculo />} />
      <Route path="/empresa" element={<CadastroEmpresa />} />
      <Route path="/login-empresa" element={<LoginEmpresa />} />

      <Route path="/pessoa" element={<ExampleOne />}/>
      <Route path="/pagina-da-empresa" element={<ExampleTwo />}/>
    </Routes>
  )
}

export default App
