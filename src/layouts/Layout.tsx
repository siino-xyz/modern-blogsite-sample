import * as React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { layoutStyle } from "./Layout.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={layoutStyle}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
