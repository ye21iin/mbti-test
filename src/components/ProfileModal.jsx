import { useState } from "react";
import { createPortal } from "react-dom";
import EditNickname from "./EditNickname";

const ProfileModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button-sky" onClick={() => setShowModal(true)}>
        프로필
      </button>
      {showModal &&
        createPortal(
          <div
            className="modal-overlay"
            onClick={() => {
              setShowModal(false);
              // setSuccessMessage("");
            }}
          >
            <EditNickname showModal={setShowModal} />
          </div>,
          document.body // portal
        )}
    </>
  );
};

export default ProfileModal;
