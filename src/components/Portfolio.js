import Project from "./Project";
import taskPic from "../assets/task-management.png";
import socialMediaPic from "../assets/social-media-backend.png";
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

const project2 = {
  name: "Social Media Back-End",
  img: socialMediaPic,
  primaryColor: "#B55FB1",
  githubUrl: "https://github.com/jstaples50/social-media-test-back-end",
  deployedSiteUrl: "https://github.com/jstaples50/social-media-test-back-end",
  shortDescription:
    "Officia duis ea aliquip nulla irure esse anim cupidatat fugiat cupidatat ex. Occaecat ut culpa do culpa aliqua veniam enim voluptate et pariatur.",
};

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <Project projectObj={project1} />
      <Project projectObj={project2} />
    </section>
  );
}
