import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Flashcard from "../components/Flashcard";
import "swiper/css";
import "swiper/css/navigation";
import { useSelectedWords } from "../context/SelectedWordsContext";
import words from "../data/words.json";

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
              <Flashcard word={word} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FlashcardPage;
