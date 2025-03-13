import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  // Function to check even or odd
  const checkEven = () => setNumber(2);
  const checkOdd = () => setNumber(3);

  // IF block outside JSX
  let message;
  if (number % 2 === 0) {
    message = "The number is Even";
  } else {
    message = "The number is Odd";
  }

  return (
    <>
      <h1>Odd or Even</h1>
      <div className="card">
        <button onClick={checkEven}>Set Number to 2 (Even)</button>
        <button onClick={checkOdd}>Set Number to 3 (Odd)</button>
        <p>The number is {number}.</p>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;