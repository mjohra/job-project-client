import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/SignForm/Login/Login";
import Registration from "./Pages/SignForm/Registration/Registration";
import UpdateProfile from "./Pages/Home/UpdateProfile/UpdateProfile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/register"
              element={<Registration></Registration>}
            ></Route>
            <Route path="/" element={<Registration></Registration>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
