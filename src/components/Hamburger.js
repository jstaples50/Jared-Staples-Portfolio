import { FaBars } from "react-icons/fa";

const hamburgerStyle = {
  position: "absolute",
  top: 35,
  right: 35,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function Hamburger({
  items,
  handleSectionRendered,
  dropdownVisibility,
  handleDropdown,
}) {
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
