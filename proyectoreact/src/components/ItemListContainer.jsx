import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json"
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])
    useEffect (() => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve (data), 2000)
        })
        promise.then ((data) => setProducts(data))
    }, [])
    return (
        <>
        <div>{props.greeting}</div>
        <div>
            <ItemList products = {products}/>
        </div>
        <ItemCount/>
        </>
    )
};





