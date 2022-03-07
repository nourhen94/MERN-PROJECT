import "./App.css";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

import SignUp from "./components/login/SignUp";
import SignIn from "./components/login/SignIn";
// import ProductList from "./components/products/ProductList";
// import Vetements from "./components/products/Products";
import Products from "./components/products/Products";
// import Footer from "./components/footer/Footer";
import OneProduct from "./components/products/OneProduct";
import Profile from "./components/profile/Profile";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
          {/* <Route path="/product" component={ProductList} /> */}
          <Route path="/products" component={Products} />
          <Route path="/product" component={OneProduct} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
