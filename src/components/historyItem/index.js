import { useState } from "react";
import ContextMenu from "../contextMenu";

const initialState = { open: false, x: null, y: null };

export default function HistoryItem({ data, i, onItemDelete }) {
  const [contextMenuState, setContextMenuState] = useState(initialState);
  const date = new Date(data.date);
  const dateString = `${date.toLocaleDateString(
    "ka"
  )}, ${date.toLocaleTimeString("ka")}`;

  const handleContextMenu = (e) => {
    e.preventDefault();

    setContextMenuState({ open: true, x: e.clientX, y: e.clientY });
  };

  return (
    <div className="historyItem" onContextMenu={handleContextMenu}>
      <span>#{i + 1}</span>
      <p>{`score: ${data.correctAnswerCount}/${data.questionCount}`}</p>
      <p>{dateString}</p>

      {contextMenuState.open && (
        <ContextMenu
          x={contextMenuState.x}
          y={contextMenuState.y}
          onClose={() => setContextMenuState(initialState)}
          onItemDelete={() => onItemDelete(i)}
        />
      )}
    </div>
  );
}
