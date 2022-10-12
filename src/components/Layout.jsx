import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
