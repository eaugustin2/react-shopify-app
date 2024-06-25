import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /*
    The below is used to get the user entered id from the shopify
    theme customization page.

    Pass this down to your component of choice to retrieve saved data from Prisma
    
    let buttonId = document
    .getElementById("container")
    ?.getAttribute("data-button-id");
    */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
