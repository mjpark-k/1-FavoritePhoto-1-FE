import Image from "next/image";
import styles from "./Loggedin.module.css";
import alarm from "@/public/alarm-icon.svg";
import UserDrop from "./UserDrop";

export default function Loggedin({
  logout,
  onClick,
  userDrop,
  setUserDrop,
  nickname,
  point,
}) {
  const handleNicknameClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div className={styles["container"]}>
      <span className={styles["points"]}>
        {point.toLocaleString("ko-KR")} P
      </span>
      <Image src={alarm} className={styles["alarm"]} alt="alarm" />
      <div className={styles["nickname-container"]}>
        <span className={styles["nickname"]} onClick={handleNicknameClick}>
          {nickname}
        </span>
        <div className={styles["user-drop"]}>
          {userDrop && (
            <UserDrop
              nickname={nickname}
              point={point}
              setUserDrop={setUserDrop}
              logout={logout}
            />
          )}
        </div>
      </div>
      <div className={styles["line"]}>|</div>
      <span className={styles["logout"]} onClick={logout}>
        로그아웃
      </span>
    </div>
  );
}
