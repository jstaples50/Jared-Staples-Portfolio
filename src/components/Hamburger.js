export default function Hamburger({ items, handleSectionRendered }) {
  return (
    <nav className="hamburger">
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
