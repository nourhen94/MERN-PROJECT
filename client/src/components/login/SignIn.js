import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../redux/actions/userActions";
import "./login.css";

const SignIn = () => {
  const { isAuth } = useSelector((state) => state.userReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="formSign-in">
      {isAuth ? (
        <Redirect to="/Profile" />
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <label>EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            <label>PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <Link to="/SignUp" className="account">
              create an account
            </Link>
            <button className="button1" type="submit">
              Sign In
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;
