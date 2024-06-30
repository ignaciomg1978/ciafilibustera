// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import Footer from "./Footer";
import Content from "./Content";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-grow">
        <LeftMenu />
        <Content />
        <RightMenu />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
