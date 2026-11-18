import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import ListeUsers from "./pages/ListeUsers";
import DetailUser from "./pages/DetailUser";
import Connexion from "./pages/Connexion";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import RoutePrivee from "./components/RoutePrivee";
import Layout from "./components/Layout";

function App() {
  const [estConnecte, setEstConnecte] = useState(false);

  return (
    <Routes>
      {/* Pages avec menu et pied de page */}
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<ListeUsers />} />
        <Route path="/users/:id" element={<DetailUser />} />

        {/* Pages protégées */}
        <Route element={<RoutePrivee estConnecte={estConnecte} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Route>

      {/* Sans menu ni pied de page */}
      <Route
        path="/connexion"
        element={<Connexion onLogin={() => setEstConnecte(true)} />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;