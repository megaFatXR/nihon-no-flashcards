import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import words from "../data/words.json";

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="flip-card" onClick={toggleFlip}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};

const FlashcardPage = () => {
  const allWords = Object.values(words).flat(); // Flatten all categories for this example

  return (
    <div className="flashcard-container">
      {allWords.length === 0 ? (
        <p>No flashcards available.</p>
      ) : (
        <Swiper modules={[Navigation]} navigation spaceBetween={50} slidesPerView={1}>
          {allWords.map((word, index) => (
            <SwiperSlide key={index}>
              <FlipCard
                frontContent={
                  <img
                    src={word.image || "default-image.jpg"}
                    alt="Front"
                    style={{ width: "100%", height: "auto" }}
                  />
                }
                backContent={
                  <div>
                    <h2  className="card-list">
                      {word.word || word.adjective || word.noun || word.suruForm} / {word.forms.shortForm}
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
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FlashcardPage;
