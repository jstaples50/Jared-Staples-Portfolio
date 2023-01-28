import "../styles/NavBar.css";

export default function NavBar({ items, handleSectionRendered }) {
  return (
    <nav className="navbar">
      <ul>
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
