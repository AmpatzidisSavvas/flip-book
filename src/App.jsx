
import Book from './components/Book';
import './App.css';
import Social from './components/Social';

function App() {
  return (
    <div className="container">
      <Social />
      <Book />
      <p className='flip'>Click to flip pages</p>
    </div>
  );
}

export default App;
