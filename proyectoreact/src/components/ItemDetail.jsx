import { useContext } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../contexts/CartContext"
import { Item } from "./Item"

const onAdd = count => addItem(product, count)

export const ItemDetail = ({product}) => {
    const { addItem } = useContext(CartContext)
    const onAdd = count => addItem (product, count)
    return (
    <div key = {product.id}>
    <img src={product.imagen} alt="Imagen"/>
    <div>
        <h3>{product.nombre}</h3>
        <p>{product.stock}</p>
        <p>{product.detalle}</p>
        <p>{product.categoria}</p>
        <span>{product.precio}</span>
        <ItemCount stock={product.stock} onAdd={onAdd}/>
    </div>
</div>
)}