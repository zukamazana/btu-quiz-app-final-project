import React, { useState } from "react";

export default function SingleChoice({ question, answer, handleAnswer }) {
  const [attemptCount, setAttemptCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const isCorrect = form.get("user-choice") === `${answer.answer}`;
    const userSelectedEl = document.getElementById(form.get("user-choice"));

    if (isCorrect) {
      userSelectedEl.style.background = "green";
    } else {
      userSelectedEl.style.background = "red";
    }
    setAttemptCount((prev) => prev + 1);
    handleAnswer(isCorrect);
  };

  return (
    <form onSubmit={handleSubmit}>
      {question.options.map((option, i) => (
        <div key={i} id={i + 1}>
          <input
            type="radio"
            name="user-choice"
            value={i + 1}
            disabled={attemptCount > 0}
            required
            id={option}
          />
          <label htmlFor={option}>{option}</label>
          <br />
        </div>
      ))}

      <br />
      <button type="submit" disabled={attemptCount > 0}>
        submit
      </button>
    </form>
  );
}
