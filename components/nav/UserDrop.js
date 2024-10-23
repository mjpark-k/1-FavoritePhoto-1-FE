import Link from "next/link";
import styles from "./UserDrop.module.css";
import { useEffect, useRef } from "react";

export default function UserDrop({ nickname, point, setUserDrop, logout }) {
  const outRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // 이벤트 영역이 밖이라면
      if (outRef.current && !outRef.current.contains(e.target)) {
        setUserDrop(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setUserDrop]);

  return (
    <div className={styles["user-drop"]}>
      <div className={styles["container"]} ref={outRef}>
        <span className={styles["title"]}>안녕하세요, {nickname}님!</span>
        <div className={styles["point"]}>
          <span className={styles["has-point"]}>보유 포인트</span>
          <span className={styles["num-point"]}>
            {point.toLocaleString("ko-KR")} P
          </span>
        </div>
        <div className={styles["mobile-table"]}>
          <div className={styles["table"]}>
            <Link href={"/mygallery"}>
              <span>마이갤러리</span>
            </Link>
            <Link href={"/mysales"}>
              <span>나의 판매 포토카드</span>
            </Link>
          </div>
          <span className={styles["logout"]} onClick={logout}>
            로그아웃
          </span>
        </div>
      </div>
    </div>
  );
}
