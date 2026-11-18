import { NavLink } from "react-router-dom";

export default function Menu() {
    const styleLien = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
        marginRight: "15px",
    });

    return (
        <nav>
            <NavLink to="/" style={styleLien}>Accueil</NavLink>
            <NavLink to="/a-propos" style={styleLien}>À propos</NavLink>
            <NavLink to="/contact" style={styleLien}>Contact</NavLink>
            <NavLink to="/users" style={styleLien}>Utilisateurs</NavLink>
            <NavLink to="/profil" style={styleLien}>Profil</NavLink>
        </nav>
    );
}