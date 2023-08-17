import { CartWidget } from "./CartWidget";

export const NavBar = () => (
    <header>
    <h1>ART&DECO</h1>
    <nav>
        <a href="#">Muebles</a>
        <a href="#">Decoración</a>
        <a href="#">Otros</a>
    </nav>
    <CartWidget/>
    </header>
);
