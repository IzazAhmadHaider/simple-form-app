// src/App2.js
import React from 'react';

function App2({Name , Email}) {
  return (
    <div className="App">
        <div>{`Your Name ${Name}`}</div>
        <div>{`Your Email ${Email} `}</div>
    </div>
  );
}

export default App2;
