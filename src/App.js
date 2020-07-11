import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState("yo-yan");

  const increment = () => {
    setCount(count + "yo-yan");

  }


  return (
    <div>
      <button onClick={increment}>add</button>



      {count}



    </div>
  )






}

export default App
