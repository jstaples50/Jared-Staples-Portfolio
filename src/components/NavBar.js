import React from "react";

const navbarItems = [
  { title: "About Me" },
  { title: "Portfolio" },
  { title: "Contact" },
  { title: "Resume" },
];

export default function NavBar() {
  return (
    <nav>
      <ul>
        {navbarItems.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul>
    </nav>
  );
}
