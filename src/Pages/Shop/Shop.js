import React, { useEffect, useState } from "react";
import "./Shop.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const Shop = () => {
  const dispatch = useDispatch();

  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <h1 className="shop-page-title">Shop</h1>
      <div className="products-container">
        {products.map((item) => (
          <div key={item.id} className="products-container-box">
            <img src={item.image} alt="product-img" />
            <h3>{item.category}</h3>
            <div className="products-box-row">
              <div className="products-price">
                <p>$ {item.price}</p>
              </div>
              <p>{item.rating.count} count</p>
              <p>
                {item.rating.rate}
                <span>
                  <FaStar className="star-icon" />
                </span>
              </p>
            </div>
            <div className="products-box-lastrow">
              <FaShoppingCart
                onClick={() => dispatch(addToCart(item))}
                className="cart-icon"
              />
              <MdFavorite
                onClick={() => dispatch(addCart(item))}
                className="fav-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
