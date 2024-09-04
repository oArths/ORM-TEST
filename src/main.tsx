import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/landpage/index.tsx";
import Error from "./pages/error/index.tsx";
import { ThemeContextProvider } from "./theme/useThema.tsx";
import { Global } from "./global.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <StrictMode>
      {/* <Error /> */}
      <Home />
      <Global />
    </StrictMode>
  </ThemeContextProvider>
);
