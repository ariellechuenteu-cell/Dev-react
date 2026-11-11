import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'

//utilisation de l'attribut className pour ajouter une classe CSS à un élément JSX
function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}

//utilisation d'une fonction fléchée pour créer un gestionnaire d'événements qui affiche une alerte lorsque le bouton est cliqué
function MyCar() {
  const myfunc = () => {
    alert('Bonjour je suis arielle');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}

//utilisation de l'attribut style pour ajouter des styles CSS en ligne à un élément JSX
function StyledCar() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}

//utilisation d'une condition pour afficher un élément JSX différent en fonction de la valeur d'une variable
function Fruit() {
  const x = 5;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }

  return (
    <h1>{y}</h1>
  );
}

//utilisation d'une expression ternaire
function MyFruit() {
  const x = 5;
  return (
    <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactStrictMode>
    <Car/>
    <MyCar/>
    <StyledCar/>
    <Fruit/>
    <MyFruit/>
  </reactStrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
