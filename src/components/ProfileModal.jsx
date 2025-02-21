import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getUserProfile, updateProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const ProfileModal = () => {
  const { token } = useAuthStore();
  const [showModal, setShowModal] = useState(false);
  const [nickname, setNickname] = useState("");
  const [newNickname, setNewNickName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (showModal) {
      setSuccessMessage("");
      getUserProfile(token)
        .then((data) => {
          setNickname(data.nickname);
          setNewNickName(data.nickname);
        })
        .catch((error) => {
          console.error("프로필 불러오기 실패:", error);
        });
    }
  }, [showModal, token]);

  const handleChangeNickname = async () => {
    if (!newNickname.trim()) {
      alert("닉네임을 입력해주세요!");
      return;
    }

    try {
      await updateProfile(token, { nickname: newNickname });
      setNickname(newNickname); // UI 업데이트
      setSuccessMessage("닉네임 수정 완료");
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
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
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
