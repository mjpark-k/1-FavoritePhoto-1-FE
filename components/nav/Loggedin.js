import Image from "next/image";
import styles from "./Loggedin.module.css";
import alarm from "@/public/alarm-icon.svg";

export default function Loggedin({ logout }) {
  return (
    <div className={styles["container"]}>
      <span className={styles["points"]}>points</span>
      <Image src={alarm} className={styles["alarm"]} alt="alarm" />
      <span className={styles["nickname"]}>nickname</span>
      <div className={styles["line"]}>|</div>
      <span className={styles["logout"]} onClick={logout}>로그아웃</span>
    </div>
  );
}
