import Hamburger from "./Hamburger";

export default function Header({ items, handleSectionRendered }) {
  return (
    <div>
      <h1 className="header">Jared Staples</h1>
      <div className="hamburger-div">
        <Hamburger
          items={items}
          handleSectionRendered={handleSectionRendered}
        />
      </div>
    </div>
  );
}
