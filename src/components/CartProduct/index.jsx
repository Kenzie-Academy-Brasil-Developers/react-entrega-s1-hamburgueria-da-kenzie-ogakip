import "./style.css"

export const CartProduct = ({ img, name, category, id, amount, removeProductCart }) => {
    return (

        <li className="cartProductBox">
            <div className="cartProductImage">
                <img src={img} alt="" />
            </div>
            <div className="cartProductDescription">
                <h3>{name}</h3>
                <span>{category}</span>
                <span>x{amount}</span>
            </div>
            <span id={id} onClick={() => removeProductCart(id)}  className="cartRemove">Remover</span>
        </li>

    )
}