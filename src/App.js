import "./App.css";
import InfoComponent from "./info";
import { useState } from "react";

function App() {
  return (
    <div className="container">
      <h2>Our reviews</h2>
      <InfoComponent />
    </div>
  );
}

export default App;
