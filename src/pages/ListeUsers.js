import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"; // "../" = remonter d'un dossier (de pages vers src)

export default function ListeUsers() {
    // On appelle notre hook : il renvoie les 3 états
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    // Cas 1 : ça charge encore → on affiche un message et on s'arrête là
    if (loading) return <p>Chargement...</p>;

    // Cas 2 : il y a eu une erreur → on l'affiche et on s'arrête là
    if (error) return <p>Erreur : {error}</p>;

    // Cas 3 : tout va bien → on affiche la liste
    return (
        <ul>
            {/* map() transforme chaque utilisateur en un élément <li> */}
            {data.map((u) => (
                // "key" doit être unique : React s'en sert pour suivre chaque élément
                <li key={u.id}>
                    {/* Lien vers /users/1, /users/2... selon l'id de l'utilisateur */}
                    <Link to={`/users/${u.id}`}>{u.name}</Link>
                </li>
            ))}
        </ul>
    );
}