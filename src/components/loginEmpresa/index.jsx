import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <section className="loginEmpresaSection">
            <div className="container">
                <h2>Login do Microempreendedor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputEdit">
                        <span>Email/cpf</span>
                        <input {...register("Login")} />
                    </div>

                    <div className="inputEdit">
                        <span>Senha</span>
                        <input {...register("Senha")} />
                    </div>
                    <div className="btnCard">
                        <button className="btn" type="submit">Entrar</button>
                        <span>ou</span>
                        <Link className="btn" to="/curriculo">Cadastre-se</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}