//il évite de répéter le menu et le pied de page dans chaque page. Il les affiche autour de la page demandée.
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function Layout() {
    return (
        <>
            {/* Le menu apparaît en haut de toutes les pages */}
            <Menu />

            <main>
                <Outlet /> {/* ici s'affiche la page enfant */}
            </main>
            {/* Le pied de page apparaît en bas de toutes les pages */}
            <footer>© 2026</footer>
        </>
    );
}