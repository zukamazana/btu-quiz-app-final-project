export default function ContextMenu({ x, y, onClose, onItemDelete }) {
  return (
    <div className="contextMenuWrapper" onClick={onClose}>
      <div
        className="contextMenu"
        style={{ top: y, left: x }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menuItems">
          <button onClick={onItemDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
