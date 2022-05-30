import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import App from "./App";
import MyLibrary from "./pages/library";
import LoginPage from "./pages/login";
const NavRoutes=()=>{
    return (<Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/library" element={<MyLibrary />} />
        </Routes>
    </Router>)
}

export default NavRoutes;