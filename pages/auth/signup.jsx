import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import { useLoginValidation } from '@/hooks/useValidation/useLoginValidation';
import { useSignupValidation } from '@/hooks/useValidation/useSignupValidation';
import { usePostSignup } from '@/lib/reactQuery/useAuth';
import styles from '@/styles/Login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Signup() {
  const [visibility, setVisibility] = useState({
    password: false,
    passwordConfirmation: false,
  });
  const {
    emailValue,
    onEmailChange,
    passwordValue,
    onPasswordChange,
    nicknameValue,
    onNicknameChange,
    passwordConfirmationValue,
    onPasswordConfirmationChange,
    errors,
    isValid,
  } = useSignupValidation();

  const usePostSignupMutation = usePostSignup();

  const visibilityToggle = (target) => {
    setVisibility((visibility) => ({
      ...visibility,
      [target]: !visibility[target],
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    usePostSignupMutation.mutate({
      email: emailValue,
      password: passwordValue,
      nickname: nicknameValue,
    });
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
            <div className={styles['nickname']}>닉네임</div>
            <Input
              option={'default'}
              style={'default'}
              placeholder={'닉네임을 입력해 주세요'}
              onChange={onNicknameChange}
              error={errors.nickname}
              name={'nickname'}
              value={nicknameValue}
            />
            <div className={styles['error']}>
              {errors.nickname && errors.nickname.message}
            </div>
          </div>
          <div>
            <div className={styles['password']}>비밀번호</div>
            <Input
              option={'password'}
              style={'password'}
              placeholder={'8자 이상 입력해 주세요'}
              onChange={onPasswordChange}
              error={errors.password}
              name={'password'}
              onClick={() => visibilityToggle('password')}
              visibility={visibility.password}
              value={passwordValue}
            />
            <div className={styles['error']}>
              {errors.password && errors.password.message}
            </div>
          </div>
          <div>
            <div className={styles['password']}>비밀번호 확인</div>
            <Input
              option={'password'}
              style={'password'}
              placeholder={'비밀번호를 한번 더 입력해 주세요'}
              onChange={onPasswordConfirmationChange}
              error={errors.passwordConfirmation}
              name={'passwordConfirmation'}
              onClick={() => visibilityToggle('passwordConfirmation')}
              visibility={visibility.passwordConfirmation}
              value={passwordConfirmationValue}
            />
            <div className={styles['error']}>
              {errors.passwordConfirmation &&
                errors.passwordConfirmation.message}
            </div>
          </div>
        </div>
        <Button
          style={'thin-main-520px'}
          children={'로그인'}
          onClick={handleSignup}
        />
        <div className={styles['signup-text']}>
          <div>이미 최애의 포토 회원이신가요?</div>
          <Link href={'/login'} className={styles['signup-link']}>
            로그인하기
          </Link>
        </div>
      </form>
    </>
  );
}

Signup.hideNav = true;
