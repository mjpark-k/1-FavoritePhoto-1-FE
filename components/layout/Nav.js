import Image from "next/image";
import Link from "next/link";
import mainLogo from "@/public/logo.svg";
import listIcon from "@/public/nav-list.svg";
import styles from "./Nav.module.css";
import Loggedin from "./Loggedin";
import NonLogin from "./NonLogin";
import { useState } from "react";

export default function Nav() {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <header className={styles["nav"]}>
      <div className={styles["container"]}>
        <Image src={listIcon} className={styles["list"]} alt="list-icon" />
        <Link href="/">
          <Image src={mainLogo} className={styles["logo"]} alt="logo" />
        </Link>
        {isLogin ? <Loggedin logout={logout} /> : <NonLogin login={login} />}
      </div>
    </header>
  );
}
