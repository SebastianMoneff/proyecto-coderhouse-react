import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
    const { items, totalQuantity, removeItem, total, clearCart } =
        useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="empty">
                <h1>¡El carrito está vacio!</h1>
                <Link to="/">
                    <button className="products-btn">Ver productos</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="main-container">
            {items.map((item) => (
                <div key={item.id} className="cart-card">
                    <img src={item.img} alt={item.name} className="card-image" />
                    <div className="cart-card-text">
                        <p>{item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="button">
                        Eliminar producto
                    </button>
                </div>
            ))}
            <div className="controls">
                <h3>Total: ${total()}</h3>
                <button onClick={() => clearCart()} className="button-sec">
                    Limpiar carrito de compra
                </button>
                <Link to="/checkout">
                    <button className="checkout-btn">Checkout</button>
                </Link>
            </div>
        </div>
    );
};