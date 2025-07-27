import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";

export const Header = () => {
    return (
        <section className="header">
            <div className="container">
                <nav>
                    <Link to="/curriculo">Cadastre seu currículo</Link>
                    <img src={Logo} alt="Logo da empresa" />
                    <Link to="/empresa">Cadastre sua empresa</Link>
                </nav>
            </div>
        </section>
    )
}