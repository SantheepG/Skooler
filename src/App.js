import logo from "./logo.svg";
import "./App.css";
import Login from "./components/auth/Login";
import Main from "./components/main/Main";
import User from "./components/main/User/User";
import Products from "./components/main/Products/Products";
import Events from "./components/main/Events/Events";
import Cart from "./components/main/Cart/Cart";
import Home from "./components/main/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="product/:id" element={<Products />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
