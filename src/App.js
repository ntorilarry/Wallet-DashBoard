import "./App.css";
import Dashboard from "./components/dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import ForgetPassword from './components/forgetPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
      </Routes>
    </div>
  );
}

export default App;
