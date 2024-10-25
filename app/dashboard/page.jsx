import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="p-10">
      <h1>Dashboard</h1>
      <Link href={"/admin"}>Admin Panel</Link>
    </main>
  );
}
