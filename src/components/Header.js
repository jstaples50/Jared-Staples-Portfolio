import Hamburger from "./Hamburger";
import AboutMe from "./AboutMe";

export default function Header({
  items,
  handleSectionRendered,
  dropdownVisibility,
  handleDropdown,
  setSectionRendered,
}) {
  return (
    <div>
      <h1 className="header" onClick={() => setSectionRendered(<AboutMe />)}>
        Jared Staples
      </h1>
      <div className="hamburger-div">
        <Hamburger
          items={items}
          handleSectionRendered={handleSectionRendered}
          dropdownVisibility={dropdownVisibility}
          handleDropdown={handleDropdown}
        />
      </div>
    </div>
  );
}
