import React from "react";

export default function Footer({ items }) {
  return (
    <footer>
      <ul>
        {items.map((item) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </footer>
  );
}
