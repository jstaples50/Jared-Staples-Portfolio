import "../styles/Footer.css";

export default function Footer({ items }) {
  return (
    <footer className="footer">
      <ul>
        {items.map((item) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </footer>
  );
}
