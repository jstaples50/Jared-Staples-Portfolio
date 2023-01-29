import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const hamburgerStyle = {
  position: "absolute",
  top: 35,
  right: 35,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function Hamburger({ items, handleSectionRendered }) {
  const [dropdownVisibility, setDropdownVisibility] = useState("hidden");

  const handleDropdown = () => {
    dropdownVisibility === "hidden"
      ? setDropdownVisibility("visible")
      : setDropdownVisibility("hidden");
  };

  return (
    <nav className="hamburger" style={hamburgerStyle}>
      <FaBars className="FaBars" onClick={handleDropdown} />
      <ul className="dropdown" style={{ visibility: dropdownVisibility }}>
        {items.map((item) => {
          return (
            <li
              key={item.title}
              onClick={() => handleSectionRendered(item.title)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
