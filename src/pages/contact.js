import React from "react";
import ConactForm from "../components/ConactForm";
import ContactMap from "../components/ContactMap";
import Layout from "../components/Layout";

export default function contact() {
  return (
    <Layout>
      <main className="flex-1">
        <section className="md:flex px-2 py-6 md:px-5 lg:px-20">
          <ConactForm />
          <ContactMap />
        </section>
      </main>
    </Layout>
  );
}
