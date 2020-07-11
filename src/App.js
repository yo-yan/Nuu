import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);

  }
  const decrement = () => {
    setCount(count - 1);

  }
  const recrement = () => {
    setCount(0);

  }


  return (
    <div>
      <button onClick={increment}>いいね！</button>

      <button onClick={decrement}>良くないね！</button>

      <button onClick={recrement}>リセット</button>

      {count}



    </div>
  )






}

export default App
