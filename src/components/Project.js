// import taskPic from "../assets/task-management.png";
// import "../styles/Project.css";

// export default function Project() {
//   const projects = [
//     {
//       name: "Task Management App",
//       img: "../assets/task-management.png",
//       url: "https://project-management-2022-but.herokuapp.com/",
//     },
//   ];
//   console.log(projects.img);
//   return (
//     <div className="project-container">
//       <h2>Project Component</h2>
//       <p>
//         Reprehenderit sint ea dolore non sunt. Deserunt veniam minim Lorem
//         proident proident. Reprehenderit commodo id labore eu reprehenderit
//         exercitation ea proident id aliqua.
//       </p>
//       <div className="image-container">
//         <img src={taskPic} alt="task-manager" />
//       </div>
//     </div>
//   );
// }

import "../styles/Project.css";
import taskPic from "../assets/task-management.png";

export default function Project() {
  return (
    <div className="project-container">
      <div className="left-column">
        <div className="image-container">
          <img src={taskPic} alt="task-management" />
        </div>
        <div className="btn-container">
          <button className="btn github">Github</button>
          <button className="btn deployed-site">Deployed Site</button>
        </div>
      </div>
      <div className="right-column">
        <h2>Project Title Here</h2>
        <div className="descr-container">
          <p className="description">
            short description here short description here short description here
            short description here short description here short description here
          </p>
        </div>
      </div>
    </div>
  );
}
