import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import LogoBranca from "./../../assets/logo-branca.png";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
    const [isHide, setIsHide] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
            if (window.innerWidth > 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="header">
            <div className="container">
                {isMobile ? (
                    <>
                        <button 
                            className="mobile-menu-toggle"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                        <Link className="Logo" to="/">
                            {
                                isMobile ? 
                                <img src={LogoBranca} alt="Logo da empresa" />:
                                <img src={Logo} alt="Logo da empresa" /> 
                            }
                        </Link>
                    </>
                ) : (
                    <nav>
                        <Link className="curriculo" to="/curriculo">Cadastre seu currículo</Link>
                        <Link className="Logo" to="/"><img src={Logo} alt="Logo da empresa" /></Link>
                        <Link className="empresa" to="/empresa">Cadastre sua empresa</Link>
                    </nav>
                )}
            </div>
            
            {isMobile && isMobileMenuOpen && (
                <div className="mobile-menu">
                    <Link className="curriculo" to="/curriculo" onClick={() => setIsMobileMenuOpen(false)}>Cadastre seu currículo</Link>
                    <Link className="empresa" to="/empresa" onClick={() => setIsMobileMenuOpen(false)}>Cadastre sua empresa</Link>
                    <div className="mobile-login-options">
                        <Link className="candidato" to="/login-candidato" onClick={() => setIsMobileMenuOpen(false)}>Login Candidato</Link>
                        <Link className="empresas" to="/login-empresa" onClick={() => setIsMobileMenuOpen(false)}>Login Empresa</Link>
                    </div>
                </div>
            )}

            <div className={`login ${isMobile ? 'mobile' : ''}`}>
                {!isMobile && (
                    <>
                        <button onClick={() => setIsHide(!isHide)}>Entrar/Login</button>
                        <div className={!isHide ? "hide" : "options"}>
                            <Link className="candidato" to="/login-candidato">Candidato</Link>
                            <Link className="empresas" to="/login-empresa">Empresa</Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}