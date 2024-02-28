import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../../rtk/slices/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="cart">
      <div className="cart-row-total">
        <p>
          Total Price: $ <span>{totalPrice}</span>
        </p>
        <button onClick={() => dispatch(clear())}>Clear Cart</button>
      </div>
      <table className="cart-row-table">
        <tr className="cart-table-header">
          <th>Category</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
        {cart.length > 0 ? (
          cart.map((item) => (
            <tr className="cart-table-details">
              <td>
                <p>{item.category}</p>
              </td>
              <td>
                <img src={item.image} alt="product-img" />
              </td>
              <td>
                <p>$ {item.price}</p>
              </td>
              <td>
                <p>{item.quantity}</p>
              </td>
              <td>
                <button onClick={() => dispatch(deleteFromCart(item))}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <p className="no-item">there is no items</p>
        )}
      </table>
    </div>
  );
};

export default Cart;
