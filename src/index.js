import React from 'react';
import { createContext, useState, useRef, useEffect, useCallback, useMemo, useContext, useReducer, memo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';

//----------------------------HOOK USESTATE----------------------

//Exemple sans useState: la variable change mais react ne sait pas qu'il doit reafficher, donc la variable reste toujours a 0
function Compteur() {
  let compteur = 0; // remis à 0 à chaque affichage !

  return <button onClick={() => compteur++}>Cliqué {compteur} fois</button>;
}

//Exemple  avec useState: quand o appelle setCompteur(), React memorise la nouvelle valeur et reaffiche le composant

function CompteurUseState() {
  const [compteur, setCompteur] = useState(0);

  return (
    <button onClick={() => setCompteur(compteur + 1)}>
      Cliqué {compteur} fois
    </button>
  );
}

//Autre exemple avec un champ de texte
function Bonjour() {
  const [nom, setNom] = useState("");

  return (
    <>
      <input type='text' value={nom} onChange={(e) => setNom(e.target.value)} />
      <p>Bonjour {nom} !</p>
    </>
  );
}


//---------------------------HOOK USEEFFECT--------------------

function Titre() {
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    document.title = `Clique ${compteur} fois`;
  }, [compteur]);// [compteur] = Premier affichage, puis a chaque changement du compteur

  return <button onClick={() => setCompteur(compteur + 1)}> +1 </button>
}

// exmple classique, charger les donnees au demarrage
function ListeUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); //[] = en une seule fois


  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}


//--------------------------------HOOK USEREF-------------

function ChampFocus() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Cliquer pour ecrire</button>
    </>
  );

}


//--------------------------- HOOK USECONTEXT-----------------

//Creer le contexte
const ThemeContext = createContext("clair");

//Le fournir en haut de l'arbre
function Apps() {
  const [theme, setTheme] = useState('clair');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

//Page ne recoit rien en props
function Page() {
  return <Bouton />;
}

//Le lire n'importe ou en dessous
function Bouton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'clair' ? 'sombre' : 'clair')}> Theme actuel: {theme}</button>
  );
}


//--------------------HOOK USEREDUCER---------------------

function reducer(state, action) {
  switch (action.type) {
    case 'augmenter':
      return { compteur: state.compteur + 1 };
    case 'diminuer':
      return { compteur: state.compteur - 1 };
    case 'reset':
      return { compteur: 0 };
    default:
      return state;
  }
}

function CompteurUseReducer() {
  const [state, dispatch] = useReducer(reducer, { compteur: 0 });

  return (
    <div>
      <p>{state.compteur}</p>
      <button onClick={() => dispatch({ type: 'augmenter' })}> + </button>
      <button onClick={() => dispatch({ type: 'diminuer' })}> - </button>
      <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
    </div>
  );

}
//dispacth : envoie juste les ordres comme augmenter, diminuer, etc
//reducer: voila ce que je fais pour chaque ordre



// Exemple ple realiste, une to-do list
function reducer1(taches, action) {
  switch (action.type) {
    case 'ajouter':
      return [...taches, { id: Date.now(), texte: action.texte, fait: false }];
    case 'basculer':
      return taches.map((t) => t.id === action.id ? { ...t, fait: !t.fait } : t);
    case 'supprimer':
      return taches.filter((t) => t.id !== action.id);
    default:
      return taches;
  }
}


//---------------------HOOK USEMEMO------------------

function Liste({ produits }) {
  const [recherche, setRecherche] = useState("");
  const [compteur, setCompteur] = useState(0);

  const resultats = useMemo(() => {
    console.log("Calcul en cours...");
    return produits.filter((p) => p.nom.includes(recherche));
  }, [produits, recherche]); // recalcule seulement si l'un des deux change

  return (
    <div>
      <input value={recherche} onChange={(e) => setRecherche(e.target.value)} />
      <button onClick={() => setCompteur(compteur + 1)}>
        Clics : {compteur}
      </button>
      <ul>
        {resultats.map((p) => <li key={p.id}>{p.nom}</li>)}
      </ul>
    </div>
  );
}

/*Quand on clique sur le bouton, compteur  change et le composant se reaffiche
mais le filtre n'est pas recalcule car produits et recherche n'ont pas bouge */


//----------------------------HOOK USECALLBACK------------------

const Enfant = memo(function Enfant({ onClick }) {
  console.log("Enfant affiché");
  return <button onClick={onClick}>Dire bonjour</button>;
});

function Parent() {
  const [compteur, setCompteur] = useState(0);

  const direBonjour = useCallback(() => {
    console.log("Bonjour");
  }, []); // la fonction reste la même

  return (
    <div>
      <button onClick={() => setCompteur(compteur + 1)}>
        Parent : {compteur}
      </button>
      <Enfant onClick={direBonjour} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Compteur />
    <CompteurUseState />
    <Bonjour />
    <Titre />
    <ListeUsers />
    <ChampFocus />
    <CompteurUseReducer />
    < Parent />
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
