import "../styles/Project.css";

export default function Project({ projectObj }) {
  return (
    <div className="project-container">
      <div className="left-column">
        <div className="image-container">
          <img src={projectObj.img} alt={projectObj.name} />
        </div>
        <div className="btn-container">
          <button
            className="btn github"
            style={{ background: projectObj.primaryColor }}
          >
            <a href={projectObj.githubUrl} target="_blank">
              Github
            </a>
          </button>
          <button
            className="btn deployed-site"
            style={{ background: projectObj.primaryColor }}
          >
            <a href={projectObj.deployedSiteUrl} target="_blank">
              Deployed Site
            </a>
          </button>
        </div>
      </div>
      <div className="right-column">
        <h2>{projectObj.name}</h2>
        <div className="descr-container">
          <p className="description">{projectObj.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
