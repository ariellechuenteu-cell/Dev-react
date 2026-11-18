import { useNavigate } from "react-router-dom";

export default function Connexion({ onLogin }) {
    const navigate = useNavigate();

    function seConnecter() {
        onLogin();               // dit à App que l'utilisateur est connecté
        navigate("/dashboard");  // puis redirige
    }

    return (
        <>
            <button onClick={seConnecter}>Se connecter</button>
            <button onClick={() => navigate(-1)}>Retour</button> {/* page précédente */}
        </>
    );
}