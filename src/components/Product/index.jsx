import "./style.css"
import { useState } from "react"

export const Product = ({ product, addCart, cartList, totalPrice, setTotalPrice }) => {

    return (
        <li className="productBox">
            <div className="productImageBox">
                <img src={product.img} alt="" />
            </div>
            <div className="productDescriptionBox">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
                <button id={product.id} onClick={() => {
                    setTotalPrice(totalPrice + product.price)
                    const alreadyHave = cartList.find((el) => el.id === product.id)
                    if (alreadyHave) {
                        alreadyHave.amount += 1
                    } else {
                        addCart(product.id)
                    }
                }} >Adicionar</button>
            </div>
        </li>
    )
}