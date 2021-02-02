import React from "react";



import { connect } from "react-redux";
import { removeItemFromCart, addItem, decreaseQuantity } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => decreaseQuantity(cartItem)} className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div onClick={() => removeItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItem(item)), 
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
