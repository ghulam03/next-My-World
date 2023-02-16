import CartItem from "./CartItem";
import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
function Cart() {

  const totalItem=useSelector((state)=>state.cart.totalItem)
  const totalPrice=useSelector((state)=>state.cart.totalPrice)
  
  return (
    <>
      <div className={styles.cont}>
        <h2> My Cart Details</h2>
        <h3>Total Item:{totalItem}</h3>
        <h3>Total Price:{totalPrice}</h3>
        <CartItem />
        <button disabled>Make Payment</button>
      </div>
    </>
  );
}

export default Cart;
