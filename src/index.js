import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'

//creation d'une fonction avec une propriete brand qui sera affichée dans le h2
function Food(myobj) {
  return (
    <h2>je veux manger la {myobj.brand}!</h2>
  );
}


//creation d'une fonction avec plusieurs proprietes qui seront affichées dans le h2
function Food2(myobj) {
  return (
    <h2>je veux manger la {myobj.brand} et boire le {myobj.drink}!</h2>
  );
}

//differents types de donnees

function Car(props) {
  return(
    <>
    <h2>The car is from {props.year}!</h2>
    <h2>I am a {props.brand}!</h2>
    </>
  );
}
let x = "Ford";


//les objets et les tableaux
function MyCar(props) {
  return (
    <>
      <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
    </>
  );
}

let z = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};


//Destructuration des props
function Voiture({color}) {
  return (
    <h2>Ma voiture est {color}!</h2>
  );
}


//on peut aussi detruire toutes les proprietes mais preciser quelle propriete s'affiche a l'interieur de la fonction 
function House(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}


//destructuration avec ...rest
function House1({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}


//Enfant de react props
function Son(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactStrictMode>
    <Food brand="Pomme" />
    <Food2 brand="Pomme" drink="Jus" />
    <Car year={1969} />
    <Car brand={x} />
    <MyCar years={z} carinfo={y} />
    <Voiture brand="Ford" model="Mustang" color="rouge" year={1969} />
    <House brand="Luxe" model="Villa" color="green" />
    <House1 brand="Luxe" model="Villa" color="red" year={1969} />
    <Parent />
  </reactStrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
