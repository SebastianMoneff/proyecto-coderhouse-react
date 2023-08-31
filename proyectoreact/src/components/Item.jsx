export const Item = ({product}) => (
    <div key = {product.id}>
    <img src={product.imagen} alt="Imagen"/>
        <div>
            <h3>{product.nombre}</h3>
            <p>{product.stock}</p>
            <p>{product.categoria}</p>
            <span>{product.precio}</span>
            <button></button>
        </div>
</div>
)