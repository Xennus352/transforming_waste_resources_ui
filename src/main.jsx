import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalContainer from "./components/modal/ModalContainer.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { CommentProvider } from "./context/CommentContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <CommentProvider>
            <App />
            <ModalContainer />
            <ReactQueryDevtools initialIsOpen={false} />
          </CommentProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
