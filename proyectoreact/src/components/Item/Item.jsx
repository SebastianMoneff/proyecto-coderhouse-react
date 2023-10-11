import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="card">
      <header>
        <h2>{name}</h2>
      </header>
      <div>
        <img src={img} alt={name} className="card-image" />
      </div>
      <main className="card-main">
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
      </main>
      <footer>
        <Link to={`/item/${id}`} className="card-footer">
          VER DETALLES
        </Link>
      </footer>
    </div>
  );
};