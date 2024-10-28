import DefaultContent from '@/components/modal/contents/DefaultContent';
import ModalContainer from '@/components/modal/ModalContainer';
import Nav from '@/components/nav/Nav';
import { useErrorStore } from '@/store/useErrorStore';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const {
    error,
    setError,
    signinError,
    setSigninError,
    success,
    setSuccess,
    redirectPath,
  } = useErrorStore();
  const router = useRouter();

  const handleClick = () => {
    setSigninError(null);
    if (!redirectPath) {
      window.location.reload();
    } else if (redirectPath) {
      router.push(redirectPath);
    }
    setError(null);
    setSuccess(null);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Component {...pageProps} />
      {(error || success) && (
        <ModalContainer onClick={handleClick}>
          <DefaultContent
            style={'default'}
            title={signinError}
            content={error || success}
            buttonContent={'확인'}
            buttonStyle={'thin-main-170px'}
            onClick={handleClick}
          />
        </ModalContainer>
      )}
    </QueryClientProvider>
  );
}
