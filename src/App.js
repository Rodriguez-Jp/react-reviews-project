import "./App.css";
import InfoComponent from "./info";
import { useState } from "react";

function App() {
  return (
    <main>
      <div className="container">
        <h2>Our reviews</h2>
        <hr />
        <InfoComponent />
      </div>
    </main>
  );
}

export default App;
