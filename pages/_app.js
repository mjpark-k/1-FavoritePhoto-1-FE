import RandomPoint from "@/components/modal/contents/RandomPoint";
import ModalContainer from "@/components/modal/ModalContainer";
import Nav from "@/components/nav/Nav";
import useTimerStore from "@/store/useTimerStore";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  const { pointModal, handlePointModal } = useTimerStore();

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
