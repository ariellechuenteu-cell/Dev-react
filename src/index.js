import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'

//Les formulaires react
//Ajout des formulaires dans react
function MyForm(){
  return(
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  );
  
}


//utilisation du hook useState pour gerer l'entree
function MonFormulaire(){
  //Déclarer une variable d’état pour contenir la valeur de l’entrée et une fonction pour la mettre à jour
  const [name, setName]= useState("");

  //Créer une fonction pour gérer l’événement de changement
  function handleChange(e){
    setName(e.target.value);
    
  }
  return(
    //Définir la valeur du champ d’entrée à la variable d’état et à l’attribut onChange pour gérer l’événement de changement
    <form>
      <label>Enter your userName:
        <input type="text" value={name} onChange={handleChange}/>
      </label>
      <p>Current value: {name}</p>
    </form>
  );
  
}


//Soumission des formulaires react
function SubmitForm(){
  const[name, setName]=useState("");

  function handleChange(e){
    setName(e.target.value);
    
  }

  function handleSubmit(e){
    e.preventDefault();
    alert(name);
    
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Entre ton nom complet:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
  
}


//React form textarea
function MyForm2(){
  const[mytxt, setMytxt]=useState("");

  function handleChange(e){
    setMytxt(e.target.value);
    
  }
  return(
    <form>
      <label>Write here:
        <textarea value={mytxt} onChange={handleChange} />
      </label>
      <p>Current value:{mytxt}</p>
    </form>
  )
  
}


//React form select
function MyForm3(){
  const [mycar, setMyCar]= useState("volvo");

  const handleChange = (event) =>{
    setMyCar(event.target.value);
  }
  return(
    <form>
      <select value={mycar} onChange={handleChange}>
        <option value='ford'> ford</option>
        <option value='volvo'>volvo</option>
        <option value='audi'> audi</option>
      </select>
    </form>
  )
  
}

//Boutons radio
function MyForm4(){
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) =>{
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) =>{
    alert(`your favorite fruit is : ${selectedFruit}`);
    event.prevaultDefault();
  };

  return(
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input type='radio'
        name='fruit'
        value='apple'
        checked={selectedFruit === 'apple'}
        onChange = {handleChange}
        /> Apple
      </label>
      <br />
      <label>
        <input type='radio'
        name='fruit'
        value='banana'
        checked={selectedFruit === 'banana'}
        onChange={handleChange}
        /> Banana
      </label>
      <br />
      <label>
        <input type='radio'
        name='fruit'
        value='cherry'
        checked={selectedFruit === 'cherry'}
        onChange={handleChange}
        />Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
  
}


//Case a cocher
function MyForm5() {
  const[inputs, setInputs] = useState({});

  const handleChange = (e) =>{
    const target =e.target;
    const value = target.type === 'checked'? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]: value}))
  };

  const handleSubmit = (event) =>{
    let fillings ='';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion){
      if (inputs.tomato) fillings += 'and';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} wats a burger with ${fillings}`);
    event.preventDefault();
      
  };

  return(
    <form onSubmit ={handleSubmit}>
      <label>My name is:
        <input type='text'
          name='firstname'
          value={inputs.firstname}
          onChange={handleChange}
          />
        </label>

        <p>I want a burger with:</p>
        <label>Tomato:
          <input type='checkbox'
          name='tomato'
          checked={inputs.tomato}
          onChange={handleChange}
          />
        </label>
        <label>Onion
          <input type='checkbox'
          name='onion'
          checked={inputs.onion}
          onChange={handleChange}
          />
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

//Entree multiples
function MyForm6(){
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
      </label>
      <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}
      
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactStrictMode>
    <MyForm6 />
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
