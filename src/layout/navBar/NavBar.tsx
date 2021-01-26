import React from "react";
import "./Navbar.css";
import { Cart, Upload } from "react-bootstrap-icons";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/user/loginUser.slice";
import axios from "axios";
import { selectLoggedIn, selectName } from "../../redux/user/user.selelector";
import { selectCart } from "../../redux/cart/cart.selector";

const NavBar: React.FC = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const isloggedIn = useSelector(selectLoggedIn);
  const name = useSelector(selectName);
  const cart = useSelector(selectCart);

  let uploadTo: string = "";
  {
    isloggedIn ? (uploadTo = "/uploadProduct") : (uploadTo = "/login");
  }

  let cartTo: string = "";
  {
    isloggedIn ? (cartTo = "/addtocart") : (cartTo = "/login");
  }
  const setLogout = async () => {
    await axios.get("http://localhost:5000/api/users/logout");
    dispatch(Actions.setLogout(""));
    history.replace("/");
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" onClick={() => history.push("/")}>
        Awais's Store
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
        <ul className="navbar-nav ml-auto">
          {isloggedIn ? (
            <>
              <div className="btn-group btn-profile">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {name}
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#" onClick={setLogout}>
                    Logout
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
          <li className="nav-item">
            <NavLink className="nav-link" to={uploadTo}>
              <Upload size={25} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={cartTo}>
              <Cart size={30} />{" "}
              <span className="badge badge-warning" id="badge_icon">
                {cart.length}
              </span>
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
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
