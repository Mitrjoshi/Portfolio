import { PropsWithChildren } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Outlet } from "react-router-dom";

export const Root = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="container relative mx-auto scroll-my-12 overflow-auto px-4 pt-6 md:p-x-16 md:pt-16">
        {children}
        <Outlet />
      </div>
    </ThemeProvider>
  );
};
