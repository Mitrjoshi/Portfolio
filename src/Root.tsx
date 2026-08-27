import { PropsWithChildren } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Outlet } from "react-router-dom";

export const Root = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
      <Outlet />
    </ThemeProvider>
  );
};
