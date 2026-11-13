import type { Project } from '../profile'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">프로젝트</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.name} className="project-card">
            <h3 className="project-name">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="project-description">{project.description}</p>
            <ul className="tag-list tag-list-small">
              {project.tech.map((tech) => (
                <li key={tech} className="tag">{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
