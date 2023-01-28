import "../styles/NavBar.css";

export default function NavBar({ items }) {
  return (
    <nav className="navbar">
      <ul>
        {items.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul>
    </nav>
  );
}
