import React, { useState } from "react";
import styled from "styled-components";
import { useSelectedWords } from "../context/SelectedWordsContext";
import words from "../data/words.json";

const Container = styled.div`
  padding: 116px 22px 0;
  position: relative;
  height: 84vh;
  box-sizing: border-box;
  overflow: scroll;
}
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  position: fixed;
  top: 24px;
  left: 0;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  width: 99%;
  height: 48px;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid #111;
`;

const CategoryContainer = styled.div`
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const WordItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const WordListPage = () => {
  const { selectedWords, toggleWord, toggleCategory } = useSelectedWords();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter words based on the search term
  const filteredWords = Object.entries(words).reduce((acc, [category, items]) => {
    const matchingItems = items.filter((item) => {
      const key = item.word || item.adjective || item.noun || item.suruForm;
      return key && key.includes(searchTerm); // Ensure the key exists and matches the search term
    });
    if (matchingItems.length > 0) acc[category] = matchingItems;
    return acc;
  }, {});

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <InputContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </InputContainer>
      {Object.entries(filteredWords).map(([category, items]) => (
        <CategoryContainer key={category}>
          <CategoryTitle>
            <Checkbox
              type="checkbox"
              checked={Object.values(selectedWords[category] || {}).every(Boolean)}
              onChange={() => toggleCategory(category, words[category])}
            />
            {category}
          </CategoryTitle>
          {items.map((item) => {
            const key = item.word || item.adjective || item.noun || item.suruForm;
            return (
              <WordItem key={key}>
                <Checkbox
                  type="checkbox"
                  checked={selectedWords[category]?.[key] || false}
                  onChange={() => toggleWord(category, key)}
                />
                {key} - {item.meaning || ""}
              </WordItem>
            );
          })}
        </CategoryContainer>
      ))}
    </Container>
  );
};

export default WordListPage;
