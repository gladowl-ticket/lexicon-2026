import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ModalProvider } from "./components/Footer/ModalContext";
import { EnquireModalProvider, useEnquireModal } from "./contexts/EnquireModalContext";
import { EnquireModal } from "./components/EnquireModal";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

// Separate component to use the hook
const EnquireModalContent = () => {
  const { isOpen, closeModal } = useEnquireModal();
  return <EnquireModal isOpen={isOpen} onClose={closeModal} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <ModalProvider>
        <EnquireModalProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </BrowserRouter>
          <EnquireModalContent />
        </EnquireModalProvider>
      </ModalProvider>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;
