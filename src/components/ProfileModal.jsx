import { useState } from "react";
import { createPortal } from "react-dom";

// const [newNickname, setNewNickName] = useState("");

const ProfileModal = () => {
  const [showModal, setShowModal] = useState(false);

  // 모달 외부 클릭 시 닫기
  const handleOverlayClick = () => {
    setShowModal(false);
  };

  const handleChangeNickname = () => {};

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
              <div>
                <p className="p">원하는 닉네임으로 변경해보세요!</p>
              </div>
              <div className="flex justify-center gap-2">
                <button
                  className="button-sky mt-5"
                  onClick={handleChangeNickname}
                >
                  수정
                </button>
                <button
                  className="button-slate mt-5"
                  onClick={() => setShowModal(false)}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ProfileModal;
