import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Results({ results }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const correctAnswerCount = results.reduce(
    (count, current) => (current.isCorrect ? count + 1 : count),
    0
  );

  const handleSavePromptAcceptance = () => {
    const data = localStorage.getItem("quizzData");

    localStorage.setItem(
      "quizzData",
      JSON.stringify([
        ...JSON.parse(data || "[]"),
        { date: new Date(), correctAnswerCount, questionCount: results.length },
      ])
    );
    navigate("/");
  };
  const handleSavePromptRejection = () => navigate("/");

  return (
    <div>
      <p>
        your result: {correctAnswerCount} out of {results.length} is correct
      </p>
      <button onClick={() => setShowModal(true)}>Try Again</button>
      <button onClick={() => navigate("/history")}>See attempt History</button>

      <Modal
        style={customStyles}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <div>
          <h3>Do you want to save this attempt?</h3>
          <button onClick={handleSavePromptAcceptance}>Yes</button>
          <button onClick={handleSavePromptRejection}>No</button>
        </div>
      </Modal>
    </div>
  );
}
