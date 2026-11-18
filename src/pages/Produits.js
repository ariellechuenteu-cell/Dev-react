import { useSearchParams } from "react-router-dom";

function Produits() {
    const [params, setParams] = useSearchParams();
    const categorie = params.get("categorie"); // "velo"

    return (
        <button onClick={() => setParams({ categorie: "moto" })}>
            Voir les motos
        </button>
    );
}