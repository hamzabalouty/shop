import React, { useEffect } from "react";
import "./Favorite.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { clear, deleteCart } from "../../rtk/slices/favorite-slice";

const Favorite = () => {
  const dispatch = useDispatch();

  const favorite = useSelector((state) => state.favorite);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = favorite.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="favorite">
      <div className="favorite-row-total">
        <p>
          Total Price: $ <span>{totalPrice}</span>
        </p>
        <button onClick={() => dispatch(clear())}>Clear</button>
      </div>
      <table className="favorite-row-table">
        <tr className="favorite-table-header">
          <th>Category</th>
          <th>Image</th>
          <th>Price</th>
          <th>Cart</th>
          <th>Delete</th>
        </tr>
        {favorite.length > 0 ? (
          favorite.map((item) => (
            <tr className="favorite-table-details">
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
                <button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteCart(item))}>
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

export default Favorite;
