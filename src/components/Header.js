import Hamburger from "./Hamburger";

export default function Header({
  items,
  handleSectionRendered,
  dropdownVisibility,
  handleDropdown,
}) {
  return (
    <div>
      <h1 className="header">Jared Staples</h1>
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
