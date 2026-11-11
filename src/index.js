import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'


/* //Methode map() permet de créer un nouveau tableau en appliquant une fonction à 
chaque élément du tableau d'origine. Elle prend une fonction de rappel (callback)
comme argument, qui est exécutée pour chaque élément du tableau. La fonction de
rappel reçoit trois arguments : l'élément actuel, l'index de l'élément et le 
tableau d'origine.*/
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
//la methode map est aussi utilisee dans les composants React pour générer des listes d'éléments à partir de tableaux de données.
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

function UserList() {
  return (
    <ul>
      {users.map(user =>
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}


// la destructuration des composants react
function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FruitList />
    <UserList />
    <Greeting name="Alice" age={25} />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
