import Project from "./Project";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio Component</h2>
      <Project />
      <Project />
      <Project />
      <Project />
    </section>
  );
}
