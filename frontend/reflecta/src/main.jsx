import "@/index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "@/views/landingpage/view";
import LoginPage from "@/views/login/view";
import Signup from "@/views/signup/view";
import DashboardPage from "@/views/dashboard/view";

import BandasPage from "@/views/dashboard/views/bandas";
import Gallery from "@/views/dashboard/views/gallery";
import LearnPage from "@/views/dashboard/views/learn";

import ProfilePage from "@/views/profile/view";
import Map from "@/views/map/view";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/map' element={<Map />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/dashboard/bandas' element={<BandasPage />} />
      <Route path='/dashboard/gallery' element={<Gallery />} />
      <Route path='/dashboard/learn' element={<LearnPage />} />
    </Routes>
  </BrowserRouter>
);
