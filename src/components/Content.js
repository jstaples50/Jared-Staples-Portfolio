import "../styles/Content.css";

export default function Content({ sectionRendered }) {
  return (
    <div className="content-container">
      <h2 className="content-title">Content Component</h2>
      {sectionRendered}
    </div>
  );
}
