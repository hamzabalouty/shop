import React, { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import Modal from "react-modal";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);

  return (
    <div className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          A-Shop
        </Link>
        <CiMenuBurger
          className="header-menu-icon"
          onClick={() => setModalIsOpen(true)}
        />
        <Modal
          className="header-menu-modal"
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div>
            <div className="menu-modal-head">
              <Link to="/" className="header-logo">
                A-Shop
              </Link>
              <button onClick={() => setModalIsOpen(false)}>
                <IoClose className="menu-modal-close" />
              </button>
            </div>
            <nav className="menu-modal-list">
              <li>
                <NavLink to="/" className="modal-list-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="modal-list-link">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorite" className="modal-list-link">
                  Favorite - {favorite.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="modal-list-link">
                  Cart - {cart.length}
                </NavLink>
              </li>
            </nav>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
