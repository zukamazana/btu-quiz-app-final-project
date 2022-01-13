import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getQuestions from "../../api/questions";
import Spinner from "../../components/spinner";

const isQuizzFinished = (quizzState) => {
  const lastRound = quizzState[quizzState.length - 1];

  return lastRound.isFinished;
};

export default function Quizz() {
  const [roundState, setRoundState] = useState(() =>
    JSON.parse(localStorage.getItem("quizzState"))
  );
  const navigate = useNavigate();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    if (!roundState || isQuizzFinished(roundState)) navigate("/");
  }, [roundState]);

  useEffect(async () => {
    const data = await getQuestions();

    setQuestions(data);
  }, []);

  if (!questions) return <Spinner />;

  return <h1>Quizz page</h1>;
}
