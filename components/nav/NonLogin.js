import Link from "next/link";
import styles from "./NonLogin.module.css";

export default function NonLogin({ login }) {
  return (
    <div className={styles["container"]}>
      {/* <Link href={"/login"}> */}
        <span className={styles["login"]} onClick={login}>
          로그인
        </span>
      {/* </Link> */}
      <Link href={"/signup"}>
        <div className={styles["signup"]}>회원가입</div>
      </Link>
    </div>
  );
}
