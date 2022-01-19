import { useState, useEffect } from "react";
import BooleanChoice from "../booleanChoice";
import SingleChoice from "../singeChoice";
import MultiChoice from "../multiChoice";
import ProgressBar from "../progressBar";
import Results from "../results";

export default function Quizz({ data }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const [resultsState, setResultsState] = useState({
    visible: false,
    results: [],
  });

  const question = data.questions[activeQuestionIndex];
  const answer = data.answers[activeQuestionIndex];

  const handleAnswer = (isCorrect) => {
    setResultsState((prev) => ({
      ...prev,
      results: [...prev.results, { question, isCorrect }],
    }));
    setIsNextButtonEnabled(true);
  };

  const handleNext = () => {
    if (activeQuestionIndex + 1 === data.questions.length) {
      setResultsState((prev) => ({ ...prev, visible: true }));
    } else setActiveQuestionIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (isNextButtonEnabled) {
      setIsNextButtonEnabled(false);
    }
  }, [activeQuestionIndex]);

  const quizzComponentProps = { question, answer, handleAnswer };

  return (
    <div>
      <ProgressBar
        current={activeQuestionIndex + 1}
        total={data.questions.length}
      />
      {resultsState.visible ? (
        <Results results={resultsState.results} />
      ) : (
        <div>
          <h2>{question.question}</h2>
          {question.type === "single" && (
            <SingleChoice {...quizzComponentProps} />
          )}
          {question.type === "multiple" && (
            <MultiChoice {...quizzComponentProps} />
          )}
          {question.type === "boolean" && (
            <BooleanChoice {...quizzComponentProps} />
          )}

          <button disabled={!isNextButtonEnabled} onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
