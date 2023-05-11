import React, { useState } from "react";
// import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Header handleSidebar={() => setIsOpen((prev) => !prev)} />
      <SideBar isOpen={isOpen} />
      <main className="content wrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
