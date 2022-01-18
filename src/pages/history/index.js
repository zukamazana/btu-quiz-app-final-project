import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HistoryItem from "../../components/historyItem";

export default function History() {
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
    <div>
      <h1>History page</h1>
      <button onClick={() => navigate("/")}>Back to Home page</button>
      {history.length ? (
        history.map((data, i) => (
          <HistoryItem
            data={data}
            i={i}
            key={i}
            onItemDelete={handleItemDelete}
          />
        ))
      ) : (
        <p>No attempt history found</p>
      )}
    </div>
  );
}
