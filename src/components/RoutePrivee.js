//-----------Rôle : protéger certaines pages. Si l’utilisateur n’est pas connecté, il est renvoyé vers /connexion.
import { Navigate, Outlet } from "react-router-dom";


// { estConnecte } = la "prop" envoyée par App.js : <RoutePrivee estConnecte={estConnecte} />
export default function RoutePrivee({ estConnecte }) {

    // Si PAS connecté...
    if (!estConnecte) {
        // ...on redirige vers /connexion.
        // "replace" remplace l'entrée dans l'historique : le bouton "Retour"
        // ne ramènera pas sur la page interdite.
        return <Navigate to="/connexion" replace />; // redirection
    }

    // Sinon, on laisse passer : Outlet affiche la page protégée demandée
    // (Dashboard ou Profil)
    return <Outlet />;
}