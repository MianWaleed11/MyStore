import React from "react";
import "./Navbar.css";
import {
  Cart,
  Upload,
  UiRadiosGrid,
  PersonCircle,
} from "react-bootstrap-icons";
import { Alert } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux";
import axios from "axios";
import { selectIsLoggedIn, selectToken } from "../../redux/user/user.selector";
import {
  selectProducts,
  selectquery,
} from "../../redux/Products/products.selector";
import { Iproduct } from "../../interfaces";
import { selectCart, selectCartInfo } from "../../redux/cart/cart.selector";
import Swal from "sweetalert2";
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  //useselectors
  const isloggedIn = useSelector(selectIsLoggedIn);
  const query = useSelector(selectquery);
  const cartInfo = useSelector(selectCartInfo);
  const token = useSelector(selectToken);
  const cart = useSelector(selectCart);
  const products = useSelector(selectProducts);

  let uploadTo: string = "";
  {
    isloggedIn ? (uploadTo = "/uploadProduct") : (uploadTo = "/login");
  }

  let cartTo: string = "";
  {
    isloggedIn ? (cartTo = "/addtocart") : (cartTo = "/login");
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredbyTitle = products.filter(
      (product: Iproduct, index: number) => {
        return product.title === query;
      }
    );
    dispatch(Actions.setValue(""));
    if (filteredbyTitle.length === 0) {
      Swal.fire({
        title: "product info",
        titleText: "Item Not Found Please Try Again",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      history.push(`/productDetail/${filteredbyTitle[0]._id}`);
    }
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(Actions.setChangeHandler(e.target.value));
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <a
        href="jhjhj"
        className="navbar-brand"
        onClick={() => history.push("/")}
      >
        Store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="btn btn-secondary at-btncetagory"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                background: "none",
                outline: "none",
                border: 0,
                paddingTop: "9px",
              }}
            >
              Category
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <NavLink className="dropdown-item" to="/products/men clothing">
                men clothing
              </NavLink>
              <NavLink className="dropdown-item" to="/products/women clothing">
                women clothing
              </NavLink>
              <NavLink className="dropdown-item" to="/products/jewelery">
                jewelery
              </NavLink>
              <NavLink className="dropdown-item" to="/products/electronics">
                electronics
              </NavLink>
            </div>
          </li>

          {!isloggedIn && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" style={{marginTop:'2px'}}>
                Login
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={uploadTo}
              style={{ paddingTop: "10px" }}
            >
              Uplaod
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addtocart" id="navLink">
              <Cart size={25} className="cart_icon" />
              <span className="badge badge-warning" id="badge_icon">
                {token.length > 0 && cart?.length}
              </span>
            </NavLink>
          </li>
          {isloggedIn && (
            <li className="nav-item dropdown mt-2 user_dropdown">
              <a
                role="button"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <PersonCircle size={25} color="white" className="cart_icon" />
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <NavLink
                  className="dropdown-item"
                  to="/login"
                  onClick={() => dispatch(Actions.LogoutUser())}
                >
                  Logout
                </NavLink>
              </div>
            </li>
          )}
        </ul>

        <form className="form-inline my-2 my-lg-0" onSubmit={submitHandler}>
          <input
            className="form-control mr-sm-2"
            type="search"
            value={query}
            placeholder="Search by title"
            aria-label="Search"
            onChange={changeHandler}
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
