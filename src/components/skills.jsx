const Skills = () => {
  const skills = ["React", "C++", "JavaScript", "Node.js", "MongoDB", "HTML", "CSS"];
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skill-list">
        {skills.map((s, i) => (
          <span key={i} className="skill">{s}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
