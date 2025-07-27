import { Link } from "react-router-dom";
import { pessoas } from "../../data/pessoas";

export const Pessoas = () => {
    return (
        <section className="pessoaSection">
            <h2>Curriculos Recentes</h2>
            <div className="container">
                {
                    pessoas.map((pessoa) => (
                        <Link className="card" to="/pessoa">
                                <img src={pessoa.img} alt={pessoa.alt} />
                                <span className="data">27 de julho de 2025</span>
                                <p className="nome">{pessoa.nome}</p>
                                <p className="texto">
                                    Conhecimentos básicos em programação, banco de dados, redes e ferramentas digitais. Perfil organizado, proativo e com facilidade para aprender e trabalhar em equipe.
                                </p>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}