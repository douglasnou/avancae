import { useForm } from "react-hook-form";
import Logo from "./../../assets/logo-branca.png";
import FooterImg from "./../../assets/footer.png";

export const CadastroCandidato = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <section className="cadastroSection">
            <img className="logo" src={Logo} alt="logo da empresa"/>
            <div className="container">
                <h2>Cadastro do Candidato</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="normalInput" placeholder="Nome" {...register("Nome")}/>
                    <input className="normalInput" placeholder="E-mail" {...register("E-mail")}/>
                    <input className="normalInput" placeholder="Telefone" {...register("Telefone")}/>
                    <input className="normalInput" placeholder="Cidade" {...register("Cidade")}/>
                    <input className="normalInput" type="password" placeholder="Senha" {...register("Senha")}/>
                    <input className="normalInput" type="password" placeholder="Confirmar Senha" {...register("Confirmar Senha")}/>
                    <div className="curriculo">
                        <span>Anexe seu curriculo</span>
                        <input type="file" placeholder="Escolha um arquivo" {...register("Curriculo")}/>
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <footer>
                <img src={FooterImg} />
            </footer>
        </section>
    )
}