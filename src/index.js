import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'

//Utilisation de jsx pour créer un élément React
const myElement = <h1>I Love JSX!</h1>;

//utilisation de jsx pour créer un élément React avec une expression
const myText = <h1>React is {5 + 5} times better with JSX</h1>;

//Pour écrire du HTML sur plusieurs lignes, mettez le HTML entre parenthèses
const myList = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

// pour ecrire du code html, mettez les dans un element de contenu parent, comme un div ou un section
const myDiv = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

//Au cas contraire on peut l'ecrire dans un fragment React, qui est un conteneur vide qui ne produit pas de noeud supplémentaire dans le DOM
const myFragment = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);

//Les classes CSS sont appliquées en utilisant l'attribut className au lieu de class, car class est un mot réservé en JavaScript.
const myClass = <h1 className="myclass">Hello World</h1>;

// JSX dans les composants React
function Car() {
  const brand = "Ford";
  const model = "Mustang";
  return (
    <>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Car />,
  myClass,
    myFragment,
    myDiv,
    myList,
    myText,
    myElement,
    
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
