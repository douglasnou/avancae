export const LoginCandidato = () =>{
    return(
        <section>
            <div>
                <h2>Login do Estudante</h2>
                <form>
                    <div>
                        <span>Email/cpf</span>
                        <input {...register("Login")} />
                    </div>

                    <div>
                        <span>Senha</span>
                        <input {...register("Senha")} />
                    </div>
                </form>
            </div>
        </section>
    )
}