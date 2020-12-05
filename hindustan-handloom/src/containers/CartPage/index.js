import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
// import { generatePublicUrl } from "../../urlConfig";
import CartItem from "./CartItem";
import { addToCart, getCartItems } from "../../actions";
// import PriceDetails from "../../components/PriceDetails";

import "./style.css";
// import { MaterialButton } from "../../components/MaterialUI";

/**
 * @author
 * @function CartPage
 **/

/*
Before Login
Add product to cart
save in localStorage
when try to checkout ask for credentials and 
if logged in then add products to users cart database from localStorage
*/

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const onQuantityIncrement = (_id, qty) => {
    console.log({ _id, qty });
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card headerLeft={`My Cart`} headerRight={<div> Deliver To</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItems={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
            />
          ))}
        </Card>
        <Card headerLeft="Price" style={{ width: "500px" }}></Card>
      </div>
    </Layout>
  );
};

export default CartPage;
