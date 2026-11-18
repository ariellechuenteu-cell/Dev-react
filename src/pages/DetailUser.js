import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function DetailUser() {
    const { id } = useParams(); // "3" si l'URL est /users/3 (toujours une chaîne !)
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
