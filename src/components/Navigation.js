import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Navigation({ items }) {
  return (
    <div className="navigation">
      <Header />
      <NavBar items={items} />
    </div>
  );
}
