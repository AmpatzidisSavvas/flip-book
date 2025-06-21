import React from 'react';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className='social-container'>
          <a href="https://www.instagram.com/thepack_art_/">Savvas "ThePack" Ampatzidis</a>
          <a href="https://www.instagram.com/thomaskef/">Thomas Kefalas</a>
        </div>
        <Book />
    </div>
  );
}

export default App;
