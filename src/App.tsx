import React from 'react';
import './App.css';
import {Board} from "./Board";
import {DrawTile} from "./Api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board label={"test"}/>
          <button className="border rounded-md bg-orange-200 text-black py-2 px-1" onClick={()=> DrawTile}>Draw Tile</button>
      </header>
    </div>
  );
}

export default App;
