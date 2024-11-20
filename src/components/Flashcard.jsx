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
  return (
    <FlipCard
      className="flip-card"
      frontContent={
        <>
          <img
            src={word.image || "default-image.jpg"}
            alt="Front"
            style={{ width: "100%", height: "auto" }}
          />
          <h1 className="card-main-title">{word.meaning}</h1>
        </>
      }
      backContent={
        <div>
          <h2 className="card-title">
            <span className={word.type}></span>
            {word.long_form || word.adjective}
          </h2>
          {word.forms && (
            <ul className="card-list">
              <li>
                Short: <strong>{word.plain_form}</strong>
              </li>
              {Object.entries(word.forms).map(([key, value]) => {
                if (key === 'nai_form') {
                  return (
                    <li key={key}>
                      Nai: <strong>{value}</strong>
                    </li>
                )}
                if (key === 'past_form') {
                  return (
                    <li key={key}>
                      Past: <strong>{value}</strong>
                    </li>
                )}
                if (key === 'past_negative_form') {
                  return (
                    <li key={key}>
                      Past negative: <strong>{value}</strong>
                    </li>
                )}
                if (key === 'volitional_form') {
                  return (
                    <li key={key}>
                      Volitional: <strong>{value}</strong>
                    </li>
                )}
                if (key === 'te_form') {
                  return (
                    <li key={key}>
                      Te: <strong>{value}</strong>
                    </li>
                )}
                if (key === 'de_form') {
                  return (
                    <li key={key}>
                      De: <strong>{value}</strong>
                    </li>
                )}
                if (key === 'short_present_affirmative') {
                  return (
                    <>
                      <ol>Short form</ol>
                      <li key={key}>
                        Present: <strong>{value}</strong>
                      </li>
                    </>
                )}
                if (key === 'short_present_negative') {
                  return (
                    <li key={key}>
                      Negative: <strong>{value}</strong>
                    </li>
                )}
                if (key === 'short_past_affirmative') {
                  return (
                    <li key={key}>
                      Past: <strong>{value}</strong>
                    </li>
                )}
                if (key === 'short_past_negative') {
                  return (
                    <li key={key}>
                      Past negative: <strong>{value}</strong>
                    </li>
                )}
              })}
            </ul>
          )}
        </div>
      }
    />
  );
};

export default Flashcard;
