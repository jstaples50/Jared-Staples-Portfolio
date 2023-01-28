import "../styles/Navigation.css";

import Header from "./Header";
import NavBar from "./NavBar";

export default function Navigation({ items, handleSectionRendered }) {
  return (
    <div className="navigation">
      <Header />
      <NavBar items={items} handleSectionRendered={handleSectionRendered} />
    </div>
  );
}
