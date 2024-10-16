import Image from "next/image";
import styles from "./Loggedin.module.css";
import alarm from "@/public/alarm-icon.svg";
import UserDrop from "./UserDrop";

export default function Loggedin({ logout, onClick, userDrop, setUserDrop }) {
  return (
    <div className={styles["container"]}>
      <span className={styles["points"]}>points</span>
      <Image src={alarm} className={styles["alarm"]} alt="alarm" />
      <div className={styles["nickname-container"]}>
        <span className={styles["nickname"]} onClick={onClick}>
          유디
        </span>
        <div className={styles["user-drop"]}>
          {userDrop && (
            <UserDrop
              nickname={"유디"}
              point={1052}
              setUserDrop={setUserDrop}
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
