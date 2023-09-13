export const ItemDetail = ({product}) => (
    <div style= {{display:"flex", flexWrap:"wrap"}} key = {product.id}>
    <img src={product.imagen} alt="Imagen"/>
    <div>
        <h3>{product.nombre}</h3>
        <p>{product.stock}</p>
        <p>{product.detalle}</p>
        <p>{product.categoria}</p>
        <span>{product.precio}</span>
    </div>
</div>
)