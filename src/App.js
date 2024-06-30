// App.js
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import QuestionDisplay from "./components/QuestionDisplay";
import Result from "./components/Result";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
`;

const TransitionWrapper = styled.div`
  position: relative;

  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter-active {
    transform: translateX(0%);
    transition: transform 500ms ease-in-out;
  }
  .slide-exit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(0%);
  }
  .slide-exit-active {
    transform: translateX(-100%);
    transition: transform 500ms ease-in-out;
  }
`;

const questions = [
  { id: 1, text: "I enjoy socializing with large groups of people." },
  { id: 2, text: "I prefer to plan things rather than be spontaneous." },
  { id: 3, text: "I often think about abstract concepts and ideas." },
  { id: 4, text: "I find it easy to stay relaxed even when there's pressure." },
  { id: 5, text: "I'm always looking for new experiences and adventures." },
  // Add more questions as needed
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>Personality Test</Title>
        <TransitionWrapper>
          <TransitionGroup>
            {!showResult ? (
              <CSSTransition
                key={currentQuestion}
                classNames="slide"
                timeout={500}
              >
                <QuestionDisplay
                  question={questions[currentQuestion]}
                  onAnswer={handleAnswer}
                  totalQuestions={questions.length}
                  currentQuestionNumber={currentQuestion + 1}
                />
              </CSSTransition>
            ) : (
              <CSSTransition key="result" classNames="slide" timeout={500}>
                <Result answers={answers} />
              </CSSTransition>
            )}
          </TransitionGroup>
        </TransitionWrapper>
      </AppContainer>
    </>
  );
}

export default App;
