import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HistoryItem from "../../components/historyItem";

export default function Home() {
  const navigate = useNavigate();
  const [history, setHistory] = useState(() =>
    JSON.parse(localStorage.getItem("quizzData") || "[]")
  );

  const handleItemDelete = (id) => {
    setHistory((prev) => prev.filter((_, i) => i != id));
  };

  useEffect(() => {
    localStorage.setItem("quizzData", JSON.stringify(history));
  }, [history]);

  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => navigate("quizz")}>start quizz</button>
      <button onClick={() => navigate("/history")}>view attempt history</button>

      {history[0] && (
        <HistoryItem data={history[0]} i={0} onItemDelete={handleItemDelete} />
      )}
    </>
  );
}
