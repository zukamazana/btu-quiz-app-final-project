import React, { useState } from "react";

export default function MultiChoice({ question, answer, handleAnswer }) {
  const [attemptCount, setAttemptCount] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState(() =>
    question.options.reduce((acc, c, i) => ({ ...acc, [i + 1]: false }), {})
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let isCorrect = true;

    Object.entries(checkBoxState).forEach(([id, value]) => {
      if (answer.answer.includes(id) && !value) isCorrect = false;

      answer.answer.forEach((id) => {
        if (!checkBoxState[id]) isCorrect = false;
      });
    });

    if (isCorrect) {
      e.target.style.background = "green";
    } else {
      e.target.style.background = "red";
    }

    setAttemptCount((prev) => prev + 1);
    handleAnswer(isCorrect);
  };

  return (
    <form onSubmit={handleSubmit}>
      {question.options.map((option, i) => (
        <div key={i} id={i + 1}>
          <input
            type="checkbox"
            name={i + 1}
            value={i + 1}
            checked={checkBoxState[i + 1]}
            onChange={(e) =>
              setCheckBoxState((prev) => ({
                ...prev,
                [e.target.name]: e.target.checked,
              }))
            }
            disabled={attemptCount > 0}
          />
          <label htmlFor={option}>{option}</label>
          <br />
        </div>
      ))}

      <br />
      <button
        type="submit"
        disabled={
          Object.values(checkBoxState).every((value) => !value) ||
          attemptCount > 0
        }
      >
        submit
      </button>
    </form>
  );
}
