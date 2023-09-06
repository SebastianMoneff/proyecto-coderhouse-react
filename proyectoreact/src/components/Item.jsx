export const Item = ({product}) => (
    <div key = {product.id}>
        <img src={product.imagen} alt="Imagen"/>
        <div>
            <h2>{product.nombre}</h2>
            <h3>{product.stock}</h3>
            <span>{product.precio}</span>
        </div>
    </div>
)