import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="nav">
      <span>
        <Link to="/" id="logo">
          Matchy Shop
        </Link>
      </span>
      <div className="links">
        <div className="dropdown">
          <span className="link">HOMMES</span>
          <div className="dropdown-content">
            <Link to="/products/homme/vetements">Vêtements</Link>
            <Link to="/products/homme/chaussures">Chaussures</Link>
            <Link to="/products/homme/accessoires">Accessoires</Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="link">FEMMES</span>
          <div className="dropdown-content">
            <Link to="/products/femme/vetements">Vêtements</Link>
            <Link to="/products/femme/chaussures">Chaussures</Link>
            <Link to="/products/femme/accessoires">Accessoires</Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="link">ENFANTS</span>
          <div className="dropdown-content">
            <Link to="/products/enfant/vetements">Vêtements</Link>
            <Link to="/products/enfant/chaussures">Chaussures</Link>
            <Link to="/products/enfant/accessoires">Accessoires</Link>
          </div>
        </div>
        <span>
          {isAuth ? (
            <Link onClick={() => logoutHandler()} className="link">
              DECONNECTER
            </Link>
          ) : (
            <Link to="/SignIn" className="link">
              SE CONNECTER
            </Link>
          )}
        </span>
        {/* <span>
          <Link to="/SignUp" className="link">
            S'INSCRIRE
          </Link>
        </span> */}
        <ShoppingCartOutlined />
      </div>
    </div>
  );
};

export default Navbar;
