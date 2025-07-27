import { Header } from "../components/header";
import Example from "./../assets/example-1.png";
import ExampleMb from "./../assets/example-1-mobile.png";
import { useState } from "react";

export const ExampleOne = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    return (
        <section className="example">
            <Header />
            {
                isMobile ?
                <img src={ExampleMb} />:
                <img src={Example} />
            }
        </section>
    )
}