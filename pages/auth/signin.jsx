import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import { useLoginValidation } from "@/hooks/useValidation/useLoginValidation";
import { usePostSignin } from "@/lib/reactQuery/useAuth";
import useAuthStore from "@/store/useAuthStore";
import styles from "@/styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Signin() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [visibility, setVisibility] = useState(false);
  const {
    emailValue,
    onEmailChange,
    passwordValue,
    onPasswordChange,
    errors,
    isValid,
  } = useLoginValidation();

  const usePostSigninMutation = usePostSignin();

  const visibilityToggle = () => {
    setVisibility(!visibility);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    usePostSigninMutation.mutate(
      {
        email: emailValue,
        password: passwordValue,
      },
      {
        // 로그인 성공 시 홈페이지로 리다이렉트 및 사용자 데이터 저장
        onSuccess: (data) => {
          console.log("로그인 성공:", data);
          login(data);
          // router.push("/"); // 성공 시 홈페이지로 이동
        },
        onError: (error) => {
          alert(error.response.data.message);
        },
      }
    );
  };

  return (
    <form className={styles["form"]}>
      <div className={styles["logo"]}>
        <Link href={"/"}>
          <Image src={"/logo.svg"} fill alt="logo" />
        </Link>
      </div>
      <div className={styles["email-password-container"]}>
        <div>
          <div className={styles["email"]}>이메일</div>
          <Input
            option={"default"}
            style={"default"}
            placeholder={"이메일을 입력해 주세요"}
            onChange={onEmailChange}
            error={errors.email}
            name={"email"}
            value={emailValue}
          />
          <div className={styles["error"]}>
            {errors.email && errors.email.message}
          </div>
        </div>
        <div>
          <div className={styles["password"]}>비밀번호</div>
          <Input
            option={"password"}
            style={"password"}
            placeholder={"비밀번호를 입력해 주세요"}
            onChange={onPasswordChange}
            error={errors.password}
            name={"password"}
            onClick={visibilityToggle}
            visibility={visibility}
          />
          <div className={styles["error"]}>
            {errors.password && errors.password.message}
          </div>
        </div>
      </div>
      <Button
        style={"thin-main-520px"}
        text={"로그인"}
        onClick={handleSignin}
      />
      <div className={styles["signup-text"]}>
        <div>최애의 포토가 처음이신가요?</div>
        <Link href={"/auth/signup"} className={styles["signup-link"]}>
          회원가입하기
        </Link>
      </div>
    </form>
  );
}
