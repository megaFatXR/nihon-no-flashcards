import React, { createContext, useContext, useState, useEffect } from "react";
import words from "../data/dictionary.json";

const SelectedWordsContext = createContext();

export const useSelectedWords = () => useContext(SelectedWordsContext);

export const SelectedWordsProvider = ({ children }) => {
  // Initialize selectedWords from localStorage or select all by default
  const [selectedWords, setSelectedWords] = useState(() => {
    const storedWords = localStorage.getItem("selectedWords");
    if (storedWords) {
      return JSON.parse(storedWords);
    }

    // Select all words by default
    const initialSelection = {};
    Object.entries(words).forEach(([category, items]) => {
      initialSelection[category] = {};
      items.forEach((item) => {
        const key = item.long_form || item.adjective || item.conjugations?.long_form.present_affirmative;
        initialSelection[category][key] = true;
      });
    });

    return initialSelection;
  });

  useEffect(() => {
    localStorage.setItem("selectedWords", JSON.stringify(selectedWords));
  }, [selectedWords]);

  const toggleWord = (category, wordKey) => {
    setSelectedWords((prev) => {
      const updatedCategory = {
        ...prev[category],
        [wordKey]: !prev[category]?.[wordKey],
      };
      return { ...prev, [category]: updatedCategory };
    });
  };

  const toggleCategory = (category, items) => {
    const allSelected = Object.values(selectedWords[category] || {}).every(Boolean);
    const updatedCategory = items.reduce((acc, item) => {
      const key = item.long_form || item.adjective || item.conjugations?.long_form.present_affirmative;
      acc[key] = !allSelected;
      return acc;
    }, {});
    setSelectedWords((prev) => ({ ...prev, [category]: updatedCategory }));
  };

  return (
    <SelectedWordsContext.Provider value={{ selectedWords, toggleWord, toggleCategory }}>
      {children}
    </SelectedWordsContext.Provider>
  );
};
