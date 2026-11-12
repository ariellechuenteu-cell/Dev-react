import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'

//Evenement React
//Ajout d'evenements
function Football() {
  const shoot = () => {
    alert("Great a short!");
  }
  return(
    <button onClick={shoot}>Take a short</button>
  );
}


//Argument de passage
//pour passser un argumenta un gestionnaire d'evenements, utilisez une fonction de fleche
function Handball() {
  const shooter = (a) =>{
    alert(a);
  }
  return(
    <button onClick={() =>shooter("Goal")}>Take</button>
  );
}

//Objet d'evenement react
function Volleyball(){
  const shootest= (a,b) =>{
    alert(b.type);
  }
  return(
    <button onClick={(event) =>shootest("Goal", event)}>Take a shoot</button>
  )
}

//Les conditions react
//La condition if
function MissedGoal(){
  return <h1>Missed</h1>;
  
}
function MadeGoal(){
  return <h1>Goal!</h1>;
  
}
function Goal(props){
  const isGoal = props.isGoal;
  if (isGoal){
    return <MadeGoal />;
    
  }
  return <MissedGoal />;
  
}

//Operateur logique &&: le cote droit sera rendu que si le cote gauche est vrai
function Car(props){
  return(
    <>
    {props.brand && <h1>My car is a {props.brand}! </h1>}
    </>
  );
  
}

//operateur ternaire: condition? true : false
//Revenons a l'exemple du debut
function But(props){
  const isGoals = props.isGoals;
  return(
    <>
    {isGoals ? <MadeGoal /> : <MissedGoal /> }
    </>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactStrictMode>
    <Football />
    <Handball />
    <Volleyball />
    <Goal isGoal={false} />
    <Goal isGoal={true} />
    <Car brand="Ford"/>
    <But isGoals={false} />
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
