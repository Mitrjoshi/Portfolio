import { PropsWithChildren } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Outlet } from "react-router-dom";

export const Root = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center w-full px-10">
        <div className="max-w-[1200px] w-full">
          {children}
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};
