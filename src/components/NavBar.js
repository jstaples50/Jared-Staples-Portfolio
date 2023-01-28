import React from "react";

export default function NavBar({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul>
    </nav>
  );
}
