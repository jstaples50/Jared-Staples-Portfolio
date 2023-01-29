import { FaBars } from "react-icons/fa";
import Hamburger from "./Hamburger";

const hamburgerStyle = {
  position: "absolute",
  top: 35,
  right: 35,
};

export default function Header({ items, handleSectionRendered }) {
  return (
    <div>
      <h1 className="header">Jared Staples</h1>
      <FaBars className="FaBars" style={hamburgerStyle} />
      <div className="hamburger-div">
        <Hamburger
          items={items}
          handleSectionRendered={handleSectionRendered}
        />
      </div>
    </div>
  );
}
