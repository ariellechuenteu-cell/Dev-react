//------------------------Rôle : afficher les liens pour naviguer entre les pages, sans recharger le navigateur.
import { NavLink } from "react-router-dom";

export default function Menu() {
    // NavLink fournit "isActive" (true si le lien correspond à la page actuelle).
    // Cette fonction est écrite une fois et réutilisée pour tous les liens.
    const styleLien = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal", // gras si c'est la page active
        marginRight: "15px",                       // espace entre les liens
    });

    return (
        <nav>
            {/* to="/" = l'URL de destination. Le texte entre les balises = ce que l'utilisateur voit */}
            <NavLink to="/" style={styleLien}>Accueil</NavLink>
            <NavLink to="/a-propos" style={styleLien}>À propos</NavLink>
            <NavLink to="/contact" style={styleLien}>Contact</NavLink>
            <NavLink to="/users" style={styleLien}>Utilisateurs</NavLink>
            <NavLink to="/profil" style={styleLien}>Profil</NavLink>
        </nav>
    );
}