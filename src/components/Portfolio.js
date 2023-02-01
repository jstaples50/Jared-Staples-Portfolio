import Project from "./Project";
import taskPic from "../assets/task-management.png";
import socialMediaPic from "../assets/social-media-backend.png";
import moodistPic from "../assets/moodist-1.png";
import teamGeneratorPic from "../assets/team-generator.png";
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
    "Application that tracks tasks, involves component based rendering and user authentication",
};

const project2 = {
  name: "Social Media Back-End",
  img: socialMediaPic,
  primaryColor: "#B55FB1",
  githubUrl: "https://github.com/jstaples50/social-media-test-back-end",
  deployedSiteUrl: "https://github.com/jstaples50/social-media-test-back-end",
  shortDescription:
    "A mock social media back-end that utilizes RESTful API structure",
};

const project3 = {
  name: "The Moodist",
  img: moodistPic,
  primaryColor: "#FFFFFF",
  githubUrl: "https://github.com/jstaples50/Moodist",
  deployedSiteUrl: "https://jstaples50.github.io/Moodist/",
  shortDescription:
    "App that produces a youtube video and cocktail recipe based on mood selection; Utilizes third party API requests",
};

const project4 = {
  name: "Team Generator",
  img: teamGeneratorPic,
  primaryColor: "#DC3545",
  githubUrl: "https://github.com/jstaples50/module-10-team-profile-generator",
  deployedSiteUrl: "",
  shortDescription:
    "Node.js app that creates serves up a static html file based on user input; Utilizes the CLI node package 'Inquirer'",
};

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <Project projectObj={project1} />
      <Project projectObj={project2} />
      <Project projectObj={project3} />
      <Project projectObj={project4} />
    </section>
  );
}
