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

import Forestfires from "./views/dashboard/models/views/forest-fires";
import ForestCovers from "./views/dashboard/models/views/forest-cover";
import Droughts from "./views/dashboard/models/views/droughts";
import UrbanGrowth from "./views/dashboard/models/views/urban-growth";
import AgriculturalYield from "./views/dashboard/models/views/agricultural-yields";
import SoilErotion from "./views/dashboard/models/views/soil-erotion";
import WaterQuality from "./views/dashboard/models/views/water-quality";
import NaturalDisasters from "./views/dashboard/models/views/natural.disasters";
import Biodiversity from "./views/dashboard/models/views/biodiversity-conservation";
import FireInfrestructure from "./views/dashboard/models/views/fire-infraestructure";

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
      {/* Rutas para el acceso a modelos predictivos */}
      <Route path='/models/forest-fires' element={<Forestfires />} />
      <Route path='/models/forest-cover' element={<ForestCovers />} />
      <Route path='/models/droughts' element={<Droughts />} />
      <Route path='/models/urban-growth' element={<UrbanGrowth />} />
      <Route
        path='/models/agricultural-yields'
        element={<AgriculturalYield />}
      />
      <Route path='/models/soil-erotion' element={<SoilErotion />} />
      <Route path='/models/water-quality' element={<WaterQuality />} />
      <Route path='/models/natural-disasters' element={<NaturalDisasters />} />
      <Route
        path='/models/biodiversity-conservation'
        element={<Biodiversity />}
      />
      <Route
        path='/models/fire-infraestructure'
        element={<FireInfrestructure />}
      />
      '{/* Rutas para los posts Markdown */}
      <Route path='/usos/:postName' element={<MarkdownPost />} />
    </Routes>
  </BrowserRouter>
);
