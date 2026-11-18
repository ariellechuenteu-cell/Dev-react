import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function Layout() {
    return (
        <>
            <Menu />
            <main>
                <Outlet /> {/* ici s'affiche la page enfant */}
            </main>
            <footer>© 2026</footer>
        </>
    );
}