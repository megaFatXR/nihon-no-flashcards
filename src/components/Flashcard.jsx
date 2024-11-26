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
            <>
            <table>
              <tr>
                <td scope="row">{word.forms.past_form}</td>
                <td>{word.plain_form}</td>
              </tr>
              <tr>
                <td scope="row">{word.forms.past_negative_form}</td>
                <td>{word.forms.nai_form}</td>
              </tr>
              <tr>
                <td scope="row">{word.forms.volitional_form}</td>
              </tr>
              <tr>
                <td scope="row">{word.forms.nakereba_form}</td>
                <td>{word.forms.eba_form}</td>
              </tr>
            </table>
            <ul className="card-list">
              <li>
                Te: <strong>{word.forms.te_form}</strong>
              </li>
              <li>
                De: <strong>{word.forms.de_form}</strong>
              </li>
              <li>
                Potential: <strong>{word.forms.potential_form}</strong>
              </li>
            </ul>
            </>
          )}
        </div>
      }
    />
  );
};

export default Flashcard;
