import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <header className="NavBar">
    <Link to="/">
      <h1>COMICLOUD</h1>
    </Link>

    <nav>
      <Link to="/category/Manga">manga</Link>
      <Link to="/category/Avengers">avengers</Link>
      <Link to="/category/X-Men">x-men</Link>
    </nav>
    <CartWidget />
  </header>
);
