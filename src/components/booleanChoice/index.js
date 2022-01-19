import { useState } from "react";

export default function BooleanChoice({ answer, handleAnswer }) {
  const [attemptCount, setAttemptCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const choice = JSON.parse(form.get("user-choice"));
    const isCorrect = choice === answer.answer;
    const choiceWrapper = document.getElementById(
      `${form.get("user-choice")}-id`
    );

    if (isCorrect) {
      choiceWrapper.style.background = "green";
    } else {
      choiceWrapper.style.background = "red";
    }

    setAttemptCount((prev) => prev + 1);
    handleAnswer(choice);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="false-id">
        <input
          type="radio"
          name="user-choice"
          id="false"
          required
          value="false"
        />
        <label htmlFor="false">false</label>
      </div>

      <div id="true-id">
        <input
          type="radio"
          name="user-choice"
          id="true"
          required
          value="true"
        />
        <label htmlFor="true">true</label>
      </div>

      <br />

      <button type="submit" disabled={attemptCount > 0}>
        submit
      </button>
    </form>
  );
}
