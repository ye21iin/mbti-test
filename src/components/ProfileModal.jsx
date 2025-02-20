import ReactDOM from "react-dom";

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="h2">닉네임 수정</h2>
        <p className="p">원하는 닉네임으로 변경해보세요!</p>
        <button onClick={onClose}>수정</button>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ProfileModal;
