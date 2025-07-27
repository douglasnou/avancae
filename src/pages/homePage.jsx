import { Banner } from "../components/banner"
import { Empresas } from "../components/empresas/empresas"
import { Header } from "../components/header"
import { Pessoas } from "../components/pessoas/pessoas"
import { WhatsApp } from "../components/whatsapp/whatsapp"

export const HomePage = () => {
    return (
        <>
        <Header />
        <Banner />
        <Empresas />
        <Pessoas />
        <WhatsApp />
        </>
    )
}