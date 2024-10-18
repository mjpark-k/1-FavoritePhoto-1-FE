import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import { useLoginValidation } from '@/hooks/useValidation/useLoginValidation';
import styles from '@/styles/Login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [visibility, setVisibility] = useState(false);
  const {
    emailValue,
    onEmailChange,
    passwordValue,
    onPasswordChange,
    errors,
    isValid,
  } = useLoginValidation();

  const visibilityToggle = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <form className={styles['form']}>
        <div className={styles['logo']}>
          <Image src={'/logo.svg'} fill />
        </div>
        <div className={styles['email-password-container']}>
          <div>
            <div className={styles['email']}>이메일</div>
            <Input
              option={'default'}
              style={'default'}
              placeholder={'이메일을 입력해 주세요'}
              onChange={onEmailChange}
              error={errors.email}
              name={'email'}
              value={emailValue}
            />
            <div className={styles['error']}>
              {errors.email && errors.email.message}
            </div>
          </div>
          <div>
            <div className={styles['password']}>비밀번호</div>
            <Input
              option={'password'}
              style={'password'}
              placeholder={'비밀번호를 입력해 주세요'}
              onChange={onPasswordChange}
              error={errors.password}
              name={'password'}
              onClick={visibilityToggle}
              visibility={visibility}
            />
          </div>
        </div>
        <Button style={'thin-main-520px'} children={'로그인'} />
        <div className={styles['signup-text']}>
          <div>최애의 포토가 처음이신가요?</div>
          <Link href={'/signup'} className={styles['signup-link']}>
            회원가입하기
          </Link>
        </div>
      </form>
    </>
  );
}
