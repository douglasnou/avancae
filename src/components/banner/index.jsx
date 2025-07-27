import Logo from "./../../assets/logo.png";

export const Banner = () => {
    return (
        <section className="bannerSection">
            <div className="container">
                <div className="card">
                    <img src={Logo} alt="Logo da empresa" />
                    <p>
                        <strong>Conectamos você</strong> com vagas reais em startups do Maranhão. Aqui você se cadastra, conta quem você é e o que busca. A gente cruza seu perfil com as oportunidades certas e envia tudo direto no seu WhatsApp: vagas, cursos e dicas pra te ajudar a entrar no mercado.
                        Só o que você precisa pra começar a sua jornada com o pé direito.
                    </p>
                </div>
            </div>
        </section>
    )
}