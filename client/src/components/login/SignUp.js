import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../redux/actions/userActions";
import "./login.css";

const SignUp = () => {
  const { loading, users } = useSelector((state) => state.userReducer);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // registering users
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone,
      adress,
      password,
    };
    dispatch(register(newUser));
  };
  return (
    <div>
      {/* <link to="/SignIn">SignIn</link> */}

      {users ? (
        <Redirect to="/SignIn" />
      ) : (
        <div className="form">
          {/* <h1>Sign Up</h1> */}
          <form onSubmit={handleRegister}>
            <h1>Sign Up</h1>

            <label>NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />
            <label>EMAIL</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Email"
            />
            <label>PHONE</label>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
              placeholder=" Phone Number"
            />
            <label>ADDRESS</label>
            <input
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
              required
              placeholder="Address"
            />
            <label>PASSWORD</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Password"
            />
            <button className="button1" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
