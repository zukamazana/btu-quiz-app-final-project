import { useState, useEffect } from "react";
import getQuestions from "../../api/questions";
import Spinner from "../../components/spinner";
import QuizzComponent from "../../components/quizz";

export default function Quizz() {
  const [quizzData, setQuizzData] = useState();

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
