import { useState } from "react";
import { createPortal } from "react-dom";

const ProfileModal = () => {
  const [showModal, setShowModal] = useState(false);
  // const [newNickname, setNewNickName] = useState("");

  // const handleChangeNickname = () => {};

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="h2">닉네임 수정</h2>
              <p className="p">원하는 닉네임으로 변경해보세요!</p>
              {/* <button onClick={handleChangeNickname}>수정</button> */}
              <button onClick={() => setShowModal(false)}>닫기</button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ProfileModal;
