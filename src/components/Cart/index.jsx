import "./style.css"
import { useEffect } from "react"
import { CartProduct } from "../CartProduct"

export const Cart = ({ cartProducts, totalPrice, setCartProducts, setTotalPrice, removeProductCart }) => {
    return (

        <section className="cartBox">
            <div className="cartBoxHeader">
                <h2>Carrinho de compras</h2>
            </div>
            <ul className="cartBoxBody">
                {cartProducts.length > 0 ? (
                    cartProducts.map((el, i) => {
                        return <CartProduct img={el.img} name={el.name} category={el.category} key={el.id} id={el.id} amount={el.amount} removeProductCart={removeProductCart}/>
                    })
                ) : (
                    <li className="cartEmpty">
                        <h3>Sua sacola está vazia</h3>
                        <span>Adicione itens</span>
                    </li>
                )}
            </ul>
            {cartProducts.length > 0 ? (
                <div className="cartBoxTotalPlace">
                    <div className="totalBox">
                        <span>Total</span>
                        <p>R$ {totalPrice.toFixed(2)}</p>
                    </div>
                <button onClick={() => {
                    setCartProducts([])
                    setTotalPrice(0)
                }} >Remover Todos</button>
                </div>
            ) : null}
        </section>

    )
}