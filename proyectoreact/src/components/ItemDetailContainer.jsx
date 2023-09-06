import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json"
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
    const [product, setProducts] = useState ([null])
    useEffect (() => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve (data[0]), 2000)
        })
        promise.then ((data) => setProducts(data))
    }, [])
    if (!product) return <div>Cargando....!</div>
    return (
        <>
        <div>Detalle</div>
        <ItemDetail product = {product}/>
        <ItemCount/>
        </>
    )
};





