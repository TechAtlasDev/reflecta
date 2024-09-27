import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./views/landingpage/view";
import LoginPage from "./views/login/view";
import Signup from "./views/signup/view";
import DashboardPage from "./views/dashboard/view";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);
