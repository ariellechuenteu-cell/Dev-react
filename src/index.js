import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'

//Creation d'une classe Car qui herite de React.Component
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

//Creation d'une classe MyCar qui herite de React.Component et qui prend une propriete color
class MyCar extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}


//Accesoire dans le constructeur de la classe MyCar1 pour initialiser les proprietes de la classe mere
class MyCar1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}


// Creation d'une classe qui a un objet state qui contient une propriete brand
class MyCar2 extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964
  };
  }
  // Creation d'une methode changeColor qui modifie la propriete color de l'objet state
  changeColor = () =>{
    this.setState({color:"blue"})
  }
  render() {
    // Affichage des proprietes de l'objet state et d'un bouton qui appelle la methode changeColor
    return (
      <div>
        <h1>My Car</h1>
        <p>Brand: {this.state.brand}</p>
        <p>Model: {this.state.model}</p>
        <p>Color: {this.state.color}</p>
        <p>Year: {this.state.year}</p>
        <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactStrictMode>
    <Car />
    <MyCar color="red" />
    <MyCar1 model="Mustang"/>
    <MyCar2 />
  </reactStrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
