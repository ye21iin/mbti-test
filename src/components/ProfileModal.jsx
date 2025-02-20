import { useState } from "react";
import { createPortal } from "react-dom";

// const [newNickname, setNewNickName] = useState("");
// const handleChangeNickname = () => {};

const ProfileModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOverlayClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="button-sky" onClick={() => setShowModal(true)}>
        프로필
      </button>
      {showModal &&
        createPortal(
          <div className="modal-overlay" onClick={handleOverlayClick}>
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
