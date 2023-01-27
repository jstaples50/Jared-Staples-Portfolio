import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

// const styles = {
//   display: "flex",
//   justifyContent: "space-between",
// };

export default function Navigation() {
  return (
    <div className="navigation">
      <Header />
      <NavBar />
    </div>
  );
}
