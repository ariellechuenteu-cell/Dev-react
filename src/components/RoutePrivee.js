import { Navigate, Outlet } from "react-router-dom";

export default function RoutePrivee({ estConnecte }) {
    if (!estConnecte) {
        return <Navigate to="/connexion" replace />; // redirection
    }
    return <Outlet />; // sinon, on affiche la page demandée
}