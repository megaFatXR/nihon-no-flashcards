import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import VerbContent from './VerbContent';
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
  return (
    <FlipCard
      className="flip-card"
      frontContent={
        <>
          <img
            src={word.image || "default-image.jpg"}
            alt="Front"
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
          />
          <h1 className="card-main-title">{word.meaning}</h1>
        </>
      }
      backContent={
        <>
          <div className="card-header">
            <h2 className="card-title">
              {word.long_form || word.adjective}
            </h2>
            <p className={`card-subtitle ${word.type}`}>
              {word.type} <span className="separator" /> <span>{word.meaning}</span>
            </p>
          </div>
          {/* <p className="card-subtitles">Short Forms</p> */}
          {word.forms && (
            <VerbContent word={word} />
          )}
        </>
      }
    />
  );
};

export default Flashcard;
