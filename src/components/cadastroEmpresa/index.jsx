import { useForm } from "react-hook-form";
import Logo from "./../../assets/logo-branca.png";
import FooterImg from "./../../assets/footer.png";

export const CadastroEmpreendedor = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <section className="cadastroEmpresaSection">
            <img className="logo" src={Logo} alt="logo da empresa"/>
            <div className="container">
                <h2>Cadastro do Microempreendedor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="normalInput" placeholder="CNPJ" {...register("CNPJ")}/>
                    <input className="normalInput" placeholder="Razão Social" {...register("Razao")}/>
                    <input className="normalInput" placeholder="Cidade" {...register("Cidade")}/>
                    <input className="normalInput" placeholder="Bairro" {...register("Bairro")}/>
                    <input className="normalInput" placeholder="Nome completo do responsável pelo cadastro" {...register("Nome")}/>
                    <input className="normalInput" placeholder="Email de contato" {...register("Email")}/>
                    <input className="normalInput" placeholder="Whatsapp (preferencial)" {...register("Whatsapp")}/>
                    <input className="normalInput" placeholder="Áreas que costuma contratar" {...register("Areas")}/>
                    <input className="normalInput" type="password" placeholder="Senha" {...register("Senha")}/>
                    <input className="normalInput" type="password" placeholder="Confirmar Senha" {...register("Confirmar Senha")}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <footer>
                <img src={FooterImg} />
            </footer>
        </section>
    )
}