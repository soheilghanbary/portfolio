import { FC, ReactNode } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 xl:my-8 lg:my-8">
      <Navbar />
      <main className="my-8">{children}</main>
      <Sidebar />
    </div>
  );
};

export default Layout;
