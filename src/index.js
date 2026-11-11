import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'

//creation de mon premier composant react
function Composant() {
  return <h1>Bonjour je suis un composant react</h1>
}

//creation de mon deuxieme composant react avec un argument props
function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}


//creation de mon troisieme composant react avec un autre composant a l'interieur
function MyCar(props) {
  return (
    <h2>I am a {props.band} Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <MyCar band="Toyota" />
      <MyCar band="Honda" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactStrictMode>
    <Composant />
    <Car color="red" />
    <Garage />
  </reactStrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
