import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }


  return (
    <div>
      <button onClick={increment}>up</button>



    </div>
  )






}

export default App
