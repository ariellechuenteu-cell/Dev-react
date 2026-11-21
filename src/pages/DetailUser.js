import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function DetailUser() {
    // useParams lit les paramètres de l'URL.
    // Si l'URL est /users/3, alors id vaut "3" (toujours du texte)
    const { id } = useParams();

    // On insère l'id dans l'adresse de l'API : .../users/3
    // "data: user" = on renomme "data" en "user" pour que ce soit plus clair
    const { data: user, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <Link to="/users">← Retour à la liste</Link>
        </div>
    );
}