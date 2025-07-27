import { useEffect, useState } from "react";
import Empresa1 from "./../../assets/empresa-1.png";
import Empresa2 from "./../../assets/empresa-2.png";
import Empresa3 from "./../../assets/empresa-3.png";
import Empresa4 from "./../../assets/empresa-4.png";
import Empresa5 from "./../../assets/empresa-5.png";
import { Link } from "react-router-dom";

export const Empresas = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        const scrollSpeed = 1;
        const interval = setInterval(() => {
            setScrollPosition(prev => {
                const containerWidth = 220 * 5 + 30 * 4;
                if (prev >= containerWidth) {
                    return 0;
                }
                return prev + scrollSpeed;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [isMobile]);

    const empresas = [Empresa1, Empresa2, Empresa3, Empresa4, Empresa5];

    return (
        <section className="empresaSection">
            <div className={`container ${isMobile ? 'mobile' : ''}`}>
                {isMobile ? (
                    <Link to="/pagina-da-empresa"
                        className="carousel-track"
                        style={{ transform: `translateX(-${scrollPosition}px)` }}
                    >
                        {[...empresas, ...empresas].map((empresa, index) => (
                            <img
                                key={`mobile-${index}`}
                                src={empresa}
                                alt="Logo da empresa"
                            />
                        ))}
                    </Link>
                ) : (
                    empresas.map((empresa, index) => (
                        <Link to="pagina-da-empresa">
                            <img
                                key={`desktop-${index}`}
                                src={empresa}
                                alt="Logo da empresa"
                            />
                        </Link>
                    ))
                )}
            </div>
        </section>
    )
}