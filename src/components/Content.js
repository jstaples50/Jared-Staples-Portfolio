import "../styles/Content.css";

export default function Content({ sectionRendered, handleClearDropdown }) {
  return (
    <div className="content-container" onClick={handleClearDropdown}>
      {sectionRendered}
    </div>
  );
}
