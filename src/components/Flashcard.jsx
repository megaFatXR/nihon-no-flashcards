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
        <>
          <h2 className="card-title">
            {/* <span className={word.type}></span> */}
            {word.long_form || word.adjective}
          </h2>
          {/* <p className="card-subtitles">Short Forms</p> */}
          {word.forms && (
            <>
            <table>
              <thead className={word.type}>
                <tr>
                  <th scope="col">Short Forms</th>
                </tr>
              </thead>
              <tr>
                <td scope="row">
                  <span>3</span>
                  {word.forms.past_form}
                </td>
                <td>
                  <span>1</span>
                  <strong>{word.plain_form}</strong>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <span>4</span>
                  {word.forms.past_negative_form}
                </td>
                <td>
                  <span>2</span>
                  {word.forms.nai_form}</td>
              </tr>
              <tr>
                <td scope="row">
                  <span>5</span>
                  {word.forms.volitional_form}
                </td>
              </tr>
              <thead className={word.type}>
                <tr>
                  <th scope="col">Conditionals</th>
                </tr>
              </thead>
              <tr>
                <td scope="row">
                  <span>7</span>
                  {word.forms.nakereba_form}
                </td>
                <td>
                  <span>6</span>
                  {word.forms.eba_form}
                </td>
              </tr>
              <thead className={word.type}>
                <tr>
                  <th scope="col">Te / De</th>
                </tr>
              </thead>
              <tr>
                <td>
                  <span>9</span>
                  {word.forms.de_form}
                </td>
                <td scope="row">
                  <span>8</span>
                  {word.forms.te_form}
                </td>
              </tr>
              {/* <thead className={word.type}>
                <tr>
                  <th scope="col">Tai</th>
                </tr>
              </thead>
              <tr>
                <td scope="row">
                  <span>8</span>
                  {word.forms.takunai_form}
                </td>
                <td scope="row">
                  <span>10</span>
                  {word.forms.tai_form}
                </td>
                
              </tr> */}
              <thead className={word.type}>
                <tr>
                  <th scope="col">Potential</th>
                </tr>
              </thead>
              <tr>
                <td scope="row">
                  <span>10</span>
                  {word.forms.potential_form}
                </td>
              </tr>
            </table>
            </>
          )}
        </>
      }
    />
  );
};

export default Flashcard;
