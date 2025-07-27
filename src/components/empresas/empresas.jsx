import Empresa1 from "./../../assets/empresa-1.png";
import Empresa2 from "./../../assets/empresa-2.png";
import Empresa3 from "./../../assets/empresa-3.png";
import Empresa4 from "./../../assets/empresa-4.png";
import Empresa5 from "./../../assets/empresa-5.png";
export const Empresas = () => {
    return (
        <section className="empresaSection">
            <div className="container">
                <img src={Empresa1} alt="Logo da empresa" />
                <img src={Empresa2} alt="Logo da empresa" />
                <img src={Empresa3} alt="Logo da empresa" />
                <img src={Empresa4} alt="Logo da empresa" />
                <img src={Empresa5} alt="Logo da empresa" />
            </div>
        </section>
    )
}