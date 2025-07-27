import { Header } from "../components/header";
import Example2 from "./../assets/example-2.png";
import Example2Mb from "./../assets/example-2-mobile.png";
import { useState } from "react";

export const ExampleTwo = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    return (
        <section className="example">
            <Header />
            {
                isMobile ?
                    <img src={Example2Mb} /> :
                    <img src={Example2} />
            }
        </section>
    )
}