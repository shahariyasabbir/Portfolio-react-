import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
