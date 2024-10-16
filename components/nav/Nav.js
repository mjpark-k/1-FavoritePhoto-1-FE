import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import mainLogo from "@/public/logo.svg";
import listIcon from "@/public/nav-list.svg";
import styles from "./Nav.module.css";
import Loggedin from "./Loggedin";
import NonLogin from "./NonLogin";

export default function Nav() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [userDrop, setUserDrop] = useState(false);

  const handleUserDrop = () => {
    setUserDrop(!userDrop);
  };

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    // 로그인과 회원가입 부분에 Nav가 안보이게 하기 위해
    // pathname을 이용하여 다른 style이 적용되게 했습니다.
    <div>
      <header
        className={`${styles["nav"]} ${
          router.pathname === "/login" || router.pathname === "/signup"
            ? styles["nav-none"]
            : ""
        }`}
      >
        <div className={styles["container"]}>
          <Image src={listIcon} className={styles["list"]} onClick={handleUserDrop} alt="list-icon" />
          <Link href="/">
            <Image src={mainLogo} className={styles["logo"]} alt="logo" />
          </Link>
          {isLogin ? (
            <Loggedin
              onClick={handleUserDrop}
              logout={logout}
              userDrop={userDrop}
              setUserDrop={setUserDrop}
            />
          ) : (
            <NonLogin login={login} />
          )}
        </div>
      </header>
    </div>
  );
}
