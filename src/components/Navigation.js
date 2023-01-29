import "../styles/Navigation.css";

import Header from "./Header";
import NavBar from "./NavBar";

export default function Navigation({
  items,
  handleSectionRendered,
  dropdownVisibility,
  handleDropdown,
}) {
  return (
    <div className="navigation">
      <Header
        items={items}
        handleSectionRendered={handleSectionRendered}
        dropdownVisibility={dropdownVisibility}
        handleDropdown={handleDropdown}
      />
      <NavBar items={items} handleSectionRendered={handleSectionRendered} />
    </div>
  );
}
