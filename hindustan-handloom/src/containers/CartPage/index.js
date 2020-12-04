import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
// import { generatePublicUrl } from "../../urlConfig";
// import CartItem from "./CartItem";
// import { addToCart, getCartItems } from "../../actions";
// import PriceDetails from "../../components/PriceDetails";

import "./style.css";
import { MaterialButton } from "../../components/MaterialUI";

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

    const cart =  useSelector(state => state.cart);
    const cartItems = cart.cartItems;
    // if(cart){

    // }

  return (
    <Layout>
      <div className="cartContainer">
        <Card
            headerLeft={`My Cart`}
            headerRight={<div> Deliver To</div>}
        >
          {
              Object.keys(cartItems).map((key, index) => 
                    <div key={index} className="flexRow">
                    <div className="cartProductContainer">
                        <img src="" alt="" />
                    </div>
                    <div className="cartItemDetails">
                        
                    <div> 
                        {cartItems[key].name} - qty -{cartItems[key].qty}
                    </div>
                        <div> Deliver in 3 to 5 days</div>
                    </div>
                    </div>
              )
          }

          
        </Card>
      </div>
    </Layout>
  );
};

export default CartPage;
