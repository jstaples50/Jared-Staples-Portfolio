import Project from "./Project";
import taskPic from "../assets/task-management.png";
import "../styles/Portfolio.css";

const projectObjectTemplate = {
  name: "",
  img: "",
  primaryColor: "",
  githubUrl: "",
  deployedSiteUrl: "",
  shortDescription: "",
};

const project1 = {
  name: "Task Manager",
  img: taskPic,
  primaryColor: "#ffd755",
  githubUrl: "https://github.com/cmurphgarv/Project-Management-App",
  deployedSiteUrl: "https://project-management-2022-but.herokuapp.com/login",
  shortDescription:
    "Proident aute esse ad deserunt duis amet minim. Eu ea velit consectetur eu aliqua.",
};

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio Component</h2>
      <Project projectObj={project1} />
    </section>
  );
}
