import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = (props) => {
  const [product, setProducts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise.then((data) => {
      const product = data.find((product) => parseInt(product.id) === parseInt(id));

      setProducts(product);
    });
  }, [id]);

  if (!product)
    return <div>Cargando detalles del producto... Espera un momento!</div>;

  return (
    <>
      <div>Detalle</div>
      <div key={product.id}>
        <ItemDetail product={product} />
      </div>
    </>
  );
};
