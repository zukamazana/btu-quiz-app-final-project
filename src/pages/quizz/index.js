import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getQuestions from "../../api/questions";
import Spinner from "../../components/spinner";
import QuizzComponent from "../../components/quizz";

const isQuizzFinished = (quizzState) => {
  const lastRound = quizzState[quizzState.length - 1];

  return lastRound.isFinished;
};

export default function Quizz() {
  const [roundState, setRoundState] = useState(() =>
    JSON.parse(localStorage.getItem("quizzState"))
  );
  const navigate = useNavigate();
  const [quizzData, setQuizzData] = useState();

  useEffect(() => {
    if (!roundState || isQuizzFinished(roundState)) navigate("/");
  }, [roundState, navigate]);

  useEffect(() => {
    (async () => {
      const data = await getQuestions();

      setQuizzData(data);
    })();
  }, []);

  if (!quizzData) return <Spinner />;

  return (
    <div>
      <h1>Quizz page</h1>

      <QuizzComponent data={quizzData} />
    </div>
  );
}
