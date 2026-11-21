import { useState, useEffect } from "react";

// "export function" (sans default) : on l'importe avec des accolades
// import { useFetch } from "../hooks/useFetch"
export function useFetch(url) {
    const [data, setData] = useState(null);       // les données reçues
    const [loading, setLoading] = useState(true); // true tant qu'on attend la réponse
    const [error, setError] = useState(null);     // message d'erreur éventuel

    // useEffect s'exécute APRÈS l'affichage, et à chaque changement de "url"
    useEffect(() => {
        // AbortController permet d'annuler la requête si on quitte la page avant la réponse
        const controller = new AbortController();
        setLoading(true); // on remet "chargement" au début d'une nouvelle requête
        setError(null);   // on efface l'ancienne erreur

        fetch(url, { signal: controller.signal }) // on envoie la requête
            .then((res) => {
                // fetch ne signale PAS les erreurs 404/500 : on le fait nous-mêmes
                if (!res.ok) throw new Error(`Erreur ${res.status}`);
                return res.json(); // on transforme la réponse en objet JavaScript
            })
            .then(setData) // on stocke les données (raccourci pour (d) => setData(d))
            .catch((err) => {
                // Si l'annulation vient de nous (AbortError), ce n'est pas une vraie erreur
                if (err.name !== "AbortError") setError(err.message);
            })
            .finally(() => setLoading(false)); // dans tous les cas, le chargement est fini

        // Fonction de nettoyage : appelée quand le composant disparaît ou que "url" change
        return () => controller.abort();
    }, [url]); // se relance seulement si "url" change

    // On renvoie les 3 états pour que la page puisse les utiliser
    return { data, loading, error };
}