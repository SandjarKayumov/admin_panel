import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="middle">
        <Header handleSidebar={() => setIsOpen((prev) => !prev)} />
        <SideBar isOpen={isOpen} />
        <main className="main wrapper">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
