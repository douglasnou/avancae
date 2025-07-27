import Bot from "./../../assets/videowhatsapp2.gif";
import Logo from "./../../assets/logo.png";

export const WhatsApp = () => {
    return (
        <section className="whatsappSection">
            <div className="container">
                <div className="gif">
                    <img src={Bot} />
                </div>

                <div className="explain">
                    <h3>Como funciona nossa IA?</h3>
                    <p>
                        Apresentamos a <strong>Avançaê</strong>, a <strong>IA</strong> que transforma sua plataforma de divulgação de vagas em uma experiência prática, ágil e envolvente.
                    </p>
                    <img src={Logo} alt="logo da empresa" />
                </div>
            </div>
        </section>
    )
}