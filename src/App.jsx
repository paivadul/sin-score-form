import React, { useState } from 'react';
import Form from './component/Form'; // Importa el componente Form

function App() {
  const [input, setInput] = useState({}); // Define el estado de input y su función setter

  return (
    <div className="App">
      {/* Pasa setInput como una prop al componente Form */}
      <Form input={input} setInput={setInput} />
    </div>
  );
}

export default App;
