import React from 'react';
import './App.css';
import Header from './components/Header/Header';

const App = () => {

  const cards = [
    {
      img: '/images/icon1.png',
      title: 'Declarative',
      text: 'React makes It painless to create interactive UIs.',
    },
    {
      img: '/images/icon2.png',
      title: 'Components',
      text: 'Build encapsulated components that manage their state.',
    },
    {
      img: '/images/icon3.png',
      title: 'Single-Way',
      text: 'A set of immutable values are passed to the component’s.',
    },
    {
      img: '/images/icon4.png',
      title: 'JSX',
      text: 'Statically-typed, designed to run on modern browsers.',
    },
  ];

  const drawCards = (array) => {
    return array.map((card, idx) => {
      return (
      <div key={`element-${idx}`} className="card">
        <img src={card.img} alt={`img-${idx + 1}`} / >
        <h2>{card.title}</h2>
        <p>{card.text}</p>
      </div>
      );
    });
  };

  return (
    <div>
      <Header text="Say hello to ReactJS" />
      <footer className="cards">
        {drawCards(cards)}
      </footer>
    </div>
  );
};

export default App;
