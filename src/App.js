import logo from "./logo.svg";
import "./App.css";
import Login from "./components/auth/Login";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
