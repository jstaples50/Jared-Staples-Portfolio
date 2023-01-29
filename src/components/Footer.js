import "../styles/Footer.css";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer({ items }) {
  return (
    <footer className="footer">
      <ul>
        {items.map((item) => {
          return <li>{item.title}</li>;
        })}
        <li className="github-footer">
          <FaGithub />
        </li>
        <li className="linkedin-footer">
          <FaLinkedinIn />
        </li>
      </ul>
    </footer>
  );
}
