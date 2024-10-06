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
import Noticias from "./views/dashboard/views/noticias/view";
import Usos from "./views/dashboard/views/usos/view";
import Landast9 from "./views/dashboard/views/landsat9/view";
import Antecedentes from "./views/dashboard/views/antecedentes/view";
import MarkdownPost from "./Markdownposts";
import Models from "./views/dashboard/models/view";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/map' element={<Map />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/dashboard/usos' element={<Usos />} />
      <Route path='/dashboard/noticias' element={<Noticias />} />
      <Route path='/dashboard/models' element={<Models />} />
      <Route path='/dashboard/landsat9' element={<Landast9 />} />
      <Route path='/dashboard/antecedentes' element={<Antecedentes />} />
      <Route path='/dashboard/bandas' element={<BandasPage />} />
      <Route path='/dashboard/gallery' element={<Gallery />} />
      <Route path='/dashboard/learn' element={<LearnPage />} />

      {/* Rutas para los posts Markdown */}
      <Route path='/usos/:postName' element={<MarkdownPost />} />
    </Routes>
  </BrowserRouter>
);
