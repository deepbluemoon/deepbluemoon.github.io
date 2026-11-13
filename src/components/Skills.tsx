type SkillsProps = {
  skills: string[]
  device: string
}

function Skills({ skills, device }: SkillsProps) {
  return (
    <section className="section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">기술 스택</h2>
      <ul className="tag-list">
        {skills.map((skill) => (
          <li key={skill} className="tag">{skill}</li>
        ))}
      </ul>
      <p className="skills-device">메인 디바이스 · {device}</p>
    </section>
  )
}

export default Skills
