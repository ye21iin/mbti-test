import { useState } from "react";
import { createPortal } from "react-dom";
import { updateProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";
import useNickname from "../hooks/useNickname";

const ProfileModal = () => {
  const { token } = useAuthStore();
  const { nickname, refreshNickname } = useNickname();
  const [showModal, setShowModal] = useState(false);
  const [newNickname, setNewNickName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChangeNickname = async () => {
    if (!newNickname.trim()) {
      alert("닉네임을 입력해주세요!");
      return;
    }

    try {
      await updateProfile(token, { nickname: newNickname });
      setSuccessMessage("닉네임 수정 완료");
      refreshNickname(); // 닉네임 데이터 최신화
    } catch (error) {
      alert("닉네임 변경 중 오류가 발생했습니다.");
      throw new Error(error);
    }
  };

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
              setSuccessMessage("");
            }}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="h2">닉네임 수정</h2>
              <div>
                <p className="p mb-3">원하는 닉네임으로 변경해보세요!</p>
                <p className="p mb-2 font-semibold">현재 닉네임: {nickname}</p>
                {successMessage && (
                  <span className="text-green-600 text-sm">
                    {successMessage}
                  </span>
                )}
                <input
                  className="input mt-2"
                  type="text"
                  value={newNickname}
                  onChange={(e) => setNewNickName(e.target.value)}
                  placeholder="새 닉네임 입력"
                />
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
                  onClick={() => {
                    setShowModal(false);
                    setSuccessMessage("");
                  }}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>,
          document.body // portal
        )}
    </>
  );
};

export default ProfileModal;
