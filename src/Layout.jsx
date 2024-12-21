import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";

function Layout({ isAuthenticated }) {
  return (
    <div>
      {/* Chỉ hiển thị Header nếu người dùng đã đăng nhập */}
      {isAuthenticated && <Header />}

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
