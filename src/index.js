import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Mon compteur</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Appuyer</button>
    </>
  )
}

/* function MiniQuiz() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      question: "Quelle est la capitale de la France ?",
      options: ["Paris", "Londres", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Quelle est la capitale de l'Allemagne ?",
      options: ["Berlin", "Vienne", "Rome", "Madrid"],
      answer: "Berlin"
    },
    {
      question: "Quelle est la capitale de l'Espagne ?",
      options: ["Madrid", "Barcelone", "Valence", "Seville"],
      answer: "Madrid"
    }
  ];

  const currentQuestion = questions[questionIndex];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Quiz finished
    }
  };

  return (
    <div>
      <h1>Mini Quiz</h1>
      <p>Score: {score}</p>
      <p>Question {questionIndex + 1}/{questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <reactStrictMode>
    <Counter />
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
