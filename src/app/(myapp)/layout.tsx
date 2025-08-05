import Navbar from "@/components/share/Navbar";
import React, { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = async ({ children }) => {
  return (
    <React.Fragment>
      <main className="w-6/7 mx-auto">
        <Navbar />
        <section>{children}</section>
      </main>
    </React.Fragment>
  );
};

export default AppLayout;
