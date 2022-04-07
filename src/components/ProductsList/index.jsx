import "./style.css"
import { Product } from "../Product"

export const ProductList = ({ listProducts, cartList, addCart, totalPrice, setTotalPrice }) => {
    return (
        <ul className="showProductsBox">
            {listProducts.map((el, i) => {
                return <Product product={el} addCart={addCart} cartList={cartList} key={el.id} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
            })}
        </ul>
    )
}