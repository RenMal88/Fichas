import { useState } from "react";
import Contador from "./Contador";
import Mostrar from "./Mostrar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Contador></Contador>
      <Mostrar></Mostrar>
    </div>
  );
}

export default App;
