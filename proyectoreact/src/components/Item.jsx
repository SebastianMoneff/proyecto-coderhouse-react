import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const Item = ({ product }) => (
  <div className="tarjeta__producto"key={product.id}>
    <img src={product.imagen} alt="Imagen" />
    <div>
      <h2>{product.nombre}</h2>
      <p>Stock: {product.stock}</p>
      <Link to={`/item/${product.id}`}>Detalle</Link>
      <span>Precio: ${product.precio}</span>
      <ItemCount/>
    </div>
  </div>
);
