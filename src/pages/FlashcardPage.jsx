import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ReactCardFlip from "react-card-flip";
import "swiper/css";
import "swiper/css/navigation";
import { useSelectedWords } from "../context/SelectedWordsContext";
import words from "../data/words.json";

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

const FlashcardPage = () => {
  const { selectedWords } = useSelectedWords();

  // Filter words based on selectedWords context
  const filteredWords = Object.entries(selectedWords).flatMap(([category, keys]) =>
    words[category]?.filter((item) => {
      const key = item.word || item.adjective || item.noun || item.suruForm;
      return keys[key];
    }) || []
  );

  return (
    <div className="flashcard-container">
      {filteredWords.length === 0 ? (
        <p>No flashcards selected. Please select words in the list!</p>
      ) : (
        <Swiper modules={[Navigation]} navigation spaceBetween={50} slidesPerView={1}>
          {filteredWords.map((word, index) => (
            <SwiperSlide key={index}>
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
                    <h2>{word.word || word.adjective || word.noun || word.suruForm}</h2>
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
