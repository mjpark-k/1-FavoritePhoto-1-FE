import RandomPoint from "@/components/modal/contents/RandomPoint";
import ModalContainer from "@/components/modal/ModalContainer";
import Nav from "@/components/nav/Nav";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  const [pointModal, setPointModal] = useState(false); // 랜덤 포인트 모달 상태

  // 랜덤 포인트 모달 열고 닫기
  const handlePointModal = () => {
    setPointModal((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Nav handlePointModal={handlePointModal} />
      <Component {...pageProps} />
      {pointModal && (
        <ModalContainer onClick={handlePointModal}>
          <RandomPoint handlePointModal={handlePointModal} />
        </ModalContainer>
      )}
    </QueryClientProvider>
  );
}
