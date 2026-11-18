import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function ListeUsers() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <ul>
            {data.map((u) => (
                <li key={u.id}>
                    <Link to={`/users/${u.id}`}>{u.name}</Link>
                </li>
            ))}
        </ul>
    );
}