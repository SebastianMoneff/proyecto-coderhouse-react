import { useState, useEffect } from "react";
import data from "../data/products.json";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise
      .then((data) => {
        console.log(category);
        if (category) {
          const productsByCategory = data.filter(
            (product) => product.categoria === category
          );
          setProducts(productsByCategory);
          return;
        }

        setProducts(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      <div className="contenedor__productos">
        <ItemList products={products} />
      </div>
    </>
  );
};
