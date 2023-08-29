import { useState } from "react";

const stock = 10

export const ItemCount = () => {
    const [count, setCount] = useState (1)

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev- 1)
        }
    }

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1)
        }
    }
    return (
        <div>
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            <button>¡Comprar!</button>
        </div>
    );
};