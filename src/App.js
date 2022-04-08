import { useEffect, useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductsList";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { InputSearch } from "./components/InputSearch";
import { Logo } from "./components/Logo";
import { Cart } from "./components/Cart";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [recoveryData, setRecoveryData] = useState([])
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setRecoveryData(data)
        setListProducts(data)
      });
  }, [ ]);

  const showProducts = (inputValue) => {
    if (inputValue === "") {
        setListProducts(recoveryData)
    } else {
      const includesName = listProducts.filter((el) => {
        return el.name.toLowerCase().includes(inputValue)
      });
      setListProducts(includesName);
    }
  };

  const removeProductCart = (productId) => {
    const findProduct = cartProducts.find((el) => el.id === productId);
    if (findProduct.amount > 1) {
      findProduct.amount -= 1;
      setTotalPrice(totalPrice - findProduct.price);
    } else {
      const findProductRemove = cartProducts.filter(
        (el, i) => el.id !== productId
      );
      setTotalPrice(totalPrice - findProduct.price);
      setCartProducts(findProductRemove);
    }
  };

  const handleClick = (productId) => {
    const findProduct = listProducts.find((el) => el.id === productId);
    findProduct.amount = 1;
    setCartProducts([...cartProducts, findProduct]);
  };

  return (
    <div className="App">
      <Header>
        <Logo />
        <InputSearch searchFunction={showProducts} />
      </Header>
      <Main>
        <ProductList
          listProducts={listProducts}
          cartList={cartProducts}
          addCart={handleClick}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <Cart
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          removeProductCart={removeProductCart}
        />
      </Main>
    </div>
  );
}

export default App;
