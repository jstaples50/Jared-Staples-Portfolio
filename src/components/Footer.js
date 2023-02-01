import "../styles/Footer.css";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer({ items, handleSectionRendered }) {
  return (
    <footer className="footer">
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.title}
              onClick={() => handleSectionRendered(item.title)}
              className="footer-nav"
            >
              {item.title}
            </li>
          );
        })}
        <a href="https://github.com/jstaples50" target="_blank">
          <li className="github-footer">
            <FaGithub />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/jared-staples-b60309232/"
          target="_blank"
        >
          {" "}
          <li className="linkedin-footer">
            <FaLinkedinIn />
          </li>
        </a>
      </ul>
    </footer>
  );
}
