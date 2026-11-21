//--------------------- Rôle : simuler une connexion. Elle prévient App que l’utilisateur est connecté, puis le redirige.
import { useNavigate } from "react-router-dom";


// { onLogin } = la fonction envoyée par App.js : () => setEstConnecte(true)
export default function Connexion({ onLogin }) {
    // useNavigate donne une fonction pour changer de page par le code
    const navigate = useNavigate();

    function seConnecter() {
        onLogin();               // dit à App que l'utilisateur est connecté
        navigate("/dashboard");  // puis redirige
    }

    return (
        <>
            <button onClick={seConnecter}>Se connecter</button>
            {/* navigate(-1) = revenir à la page précédente, comme le bouton "Retour" du navigateur */}
            <button onClick={() => navigate(-1)}>Retour</button> {/* page précédente */}
        </>
    );
}