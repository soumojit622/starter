"use client";
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Layout({ children }) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flex-1 flex flex-col">
        <Header />
        <section className="flex-1">{children}</section>
      </section>
    </main>
  );
}
