import React from "react";
import Header from "../components/Header";
import ConactForm from "../components/ConactForm";
import ContactMap from "../components/ContactMap";
import Footer from "../components/Footer";

export default function contact() {
  return (
    <>
      <Header />
      <main>
        <section className="md:flex px-2 py-6 md:px-5 lg:px-20">
          <ConactForm />
          <ContactMap />
        </section>
        <Footer />
      </main>
    </>
  );
}
