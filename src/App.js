import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {

  const [count, setCount] = useState(1);



  return (
    <div className="App container">
      <h1>Count: {count}</h1>
      <Counter />
    </div>
  );
}

export default App;
