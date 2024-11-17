import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import './FlashcardStyles.css';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="flip-card-front" onClick={toggleFlip}>
        {frontContent}
      </div>
      <div className="flip-card-back" onClick={toggleFlip}>
        {backContent}
      </div>
    </ReactCardFlip>
  );
};

const Flashcard = ({word}) => {
  console.log(word)
  return (
    <FlipCard
      className="flip-card"
      frontContent={
        <img
          src={word.image || "default-image.jpg"}
          alt="Front"
          style={{ width: "100%", height: "auto" }}
        />
      }
      backContent={
        <div>
          <h2 className="card-title">
            <span className={word.type}></span>
            {word.word}
          </h2>
          {word.forms && (
            <ul className="card-list">
              {Object.entries(word.forms).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      }
    />
  );
};

export default Flashcard;
