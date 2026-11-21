//-----Ce fichier contient la liste de toutes les pages et dit quelle URL affiche quel composant.
import { useState } from "react";          //Pour memoriser si l'user est connecte
import { Routes, Route } from "react-router-dom";                //Pour definir les pages
import "./App.css";


// On importe TOUS les composants qu'on utilise plus bas.
// Si un import manque ou si le nom est faux, React affiche "Module not found".

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
  // estConnecte = la valeur actuelle (false au départ)
  // setEstConnecte = la fonction pour la changer
  const [estConnecte, setEstConnecte] = useState(false);

  return (
    <Routes>
      {/* Cette Route n'a pas de "path" : elle sert juste à entourer les pages
          avec Layout (menu + pied de page). Les pages enfants s'affichent
          à l'endroit où Layout place <Outlet /> */}
      <Route element={<Layout />}>

        {/* URL "/" → affiche la page Accueil */}
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<ListeUsers />} />

        {/* ":id" est un paramètre dynamique : /users/1, /users/2, /users/57... */}
        <Route path="/users/:id" element={<DetailUser />} />

        {/* Cette Route entoure les pages protégées. RoutePrivee vérifie
            estConnecte : si false, redirection vers /connexion */}
        <Route element={<RoutePrivee estConnecte={estConnecte} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Route>

      {/* Hors Layout : la page de connexion n'a ni menu ni pied de page.
          On lui donne une fonction "onLogin" : quand elle est appelée,
          elle passe estConnecte à true */}
      <Route
        path="/connexion"
        element={<Connexion onLogin={() => setEstConnecte(true)} />}
      />

      {/* "*" = n'importe quelle autre URL → page d'erreur 404.
          On la met en dernier par convention */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;