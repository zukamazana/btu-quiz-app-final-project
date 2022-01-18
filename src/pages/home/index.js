import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleQuizzStart = () => {
    const startDate = new Date();
    const quizzState = localStorage.getItem("quizzState");

    const data = JSON.stringify(
      quizzState
        ? [...quizzState, { startDate, isFinished: false }]
        : [{ startDate, isFinished: false }]
    );

    localStorage.setItem("quizzState", data);

    navigate("quizz");
  };

  return (
    <>
      <h1>Home page</h1>
      <button onClick={handleQuizzStart}>start quizz</button>
    </>
  );
}
