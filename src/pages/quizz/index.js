import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const isQuizzFinished = (quizzState) => {
  const lastRound = quizzState[quizzState.length - 1];

  return lastRound.isFinished;
};

export default function Quizz() {
  const [state, setState] = useState(() =>
    JSON.parse(localStorage.getItem("quizzState"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!state || isQuizzFinished(state)) navigate("/");
  }, [state]);

  return <h1>Quizz page</h1>;
}
