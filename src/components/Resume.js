import resume from "../assets/file/Jared_Staples_Resume_Tech.pdf";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <section className="resume">
      <h2>Programming Proficiencies</h2>
      <ul>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Bootstrap Framework</li>
        <li>SQL</li>
        <li>Sequelize ORM</li>
        <li>Python</li>
        <li>MERN Stack</li>
      </ul>
      <a href={resume} download>
        Download My Resume
      </a>
    </section>
  );
}
