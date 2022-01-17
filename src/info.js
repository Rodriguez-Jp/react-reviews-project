import React from "react";
import { useState } from "react";
import reviews from "./data";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
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
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <h4>{job}</h4>
      <p>{text}</p>
      <div className="btn-area">
        <button onClick={prevPerson}>
          {" "}
          <AiOutlineArrowLeft />{" "}
        </button>
        <button onClick={nextPerson}>
          {" "}
          <AiOutlineArrowRight />{" "}
        </button>
      </div>
      <button onClick={surprise} className="surprise-btn">
        surprise me
      </button>
    </div>
  );
}

export default InfoComponent;
