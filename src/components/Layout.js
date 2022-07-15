import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
// import Breadcrumbs from "./Breadcrumbs";
const Layout = ({ children }) => {
  return (
    <>
      <nav className=" bg-center bg-cover bg-no-repeat ">
        <Header />
      </nav>
      {/* <Breadcrumbs /> */}
      <main className="bg-[#F3F8FF]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
