import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';

//----------------------------APPEL API(CHARGEMENT, ERREUR, AFFICHAGE)---------------------------------

function ListeUtilisateurs() {
  const [users, setUsers] = useState([]);  // les donnees
  const [loading, setLoading] = useState(true) //Chargement en cours
  const [error, setError] = useState(null) //message d'erreur

  useEffect(() => {
    async function chargerUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error(`Erreur serveur:${res.status}`);
        }

        const data = await res.json();
        setUsers(data);
      }
      catch (err) {
        setError(err.message);
      }
      finally {
        setLoading(false);   // s'execute toujours, sucees ou echec

      }
    }
    chargerUsers();
  }, []);

  if (loading) return <p>CHargement...</p>;
  if (error) return <p style={{ color: "red" }}>Erreur : {error}</p>;

  return (
    <ul>
      {users.map((u) => (<li key={u.id}>{u.name}</li>))}
    </ul>
  );
}



//--------------------ENVOYER DES DONNEES POSTS------------------
async function creerUtilisateur(nom) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nom }),
  });
  if (!res.ok) throw new Error("Échec de la création");
  return res.json();
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < ListeUtilisateurs />
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
