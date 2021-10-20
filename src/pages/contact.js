import React from "react";
import Header from "../components/Header";
import ConactForm from "../components/ConactForm";
import ContactMap from "../components/ContactMap";

export default function contact() {
  return (
    <>
      <Header />
      <main className="px-2 md:flex md:px-5 lg:px-20">
        <ConactForm />
        <ContactMap />
      </main>
    </>
  );
}
