import style from "./Dialog.module.css";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={style.dialog_overlay} onClick={handleOverlayClick}>
      <div className={style.dialog_div} onClick={(e) => e.stopPropagation()}>
        <h2>Añadir Driver</h2>
        <div>{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default Dialog;
