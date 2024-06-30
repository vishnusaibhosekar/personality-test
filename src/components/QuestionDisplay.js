// components/QuestionDisplay.js
import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const AnswerOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AnswerButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const QuestionDisplay = ({ question, onAnswer }) => {
  const handleSelection = (value) => {
    onAnswer(question.id, value);
  };

  return (
    <QuestionContainer>
      <QuestionText>{question.text}</QuestionText>
      <AnswerOptions>
        {[-2, -1, 0, 1, 2].map((value) => (
          <AnswerButton key={value} onClick={() => handleSelection(value)}>
            {value === -2
              ? "Strongly Disagree"
              : value === -1
              ? "Disagree"
              : value === 0
              ? "Neutral"
              : value === 1
              ? "Agree"
              : "Strongly Agree"}
          </AnswerButton>
        ))}
      </AnswerOptions>
    </QuestionContainer>
  );
};

export default QuestionDisplay;
