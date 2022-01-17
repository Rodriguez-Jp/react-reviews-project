import React from "react";
import { useState } from "react";
import reviews from "./data";

function InfoComponent() {
  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = reviews[index];

  const nextPerson = () => {
    if (index >= reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevPerson = () => {
    if (index <= 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const surprise = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    console.log(randomNum);
    setIndex(randomNum);
  };

  return (
    <div key={id} className="item-container">
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{job}</p>
      <p>{text}</p>
      <button onClick={prevPerson}> prev </button>
      <button onClick={nextPerson}> next </button>
      <button onClick={surprise}>Surprise me</button>
    </div>
  );
}

export default InfoComponent;
