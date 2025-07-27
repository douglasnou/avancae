import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { useState } from "react";

export const Header = () => {
    const [ isHide, setIsHide ] = useState(false);
    console.log(isHide)

    return (
        <section className="header">
            <div className="container">
                <nav>
                    <Link className="curriculo" to="/curriculo">Cadastre seu currículo</Link>
                    <img src={Logo} alt="Logo da empresa" />
                    <Link className="empresa" to="/empresa">Cadastre sua empresa</Link>
                </nav>
            </div>
            <div className="login">
                <button onClick={()=> setIsHide(!isHide)}>Entrar/Login</button>
                <div className={!isHide ? "hide":"options"}>
                    <Link className="candidato" to="/login-candidato">Candidato</Link>
                    <Link className="empresas" to="login-empresa">Empresa</Link>
                </div>
            </div>
        </section>
    )
}