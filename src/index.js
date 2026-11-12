import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'

//Liste react: on affiche les listes avec la methode map()
function MyCars(){
  const cars =['Ford', 'Bmw', 'Audi'];
  return(
    <>
    <h1>My cars:</h1>
    <ul>
      {cars.map((car)=> <li>I am a {car}</li>)}
    </ul>
    </>
  );
  
}

//Cles dans les listes react
function MesVoitures(){
  const voitures = [{id:1001, brand:'Ford'}, {id:1002, brand:'BMW'}, {id:1003, brand:'Audi'}];
  return(
    <>
    <h1>Mes voitures:</h1>
    <ul>
      {voitures.map((voiture) => <li key={voiture.id}>Je suis une{voiture.brand}</li>)}
    </ul>
    </>
  );
  
}

//Utilisation de l'index du tableau comme cle(non recommande poue les listes dynamiques)
function MesCamions(){
  const camions = ['ford','BMW','Audi'];
  return(
    <>
    <h1>Mes camions:</h1>
    <ul>
      {camions.map((camion, index) =><li key={index}>Je suis un{camion}</li>)}
    </ul>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactStrictMode>
    <MyCars />
    <MesVoitures />
    <MesCamions />
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
