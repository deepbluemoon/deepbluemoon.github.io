import type { School } from '../profile'

type EducationProps = {
  schools: School[]
}

function Education({ schools }: EducationProps) {
  return (
    <section className="section" aria-labelledby="education-title">
      <h2 id="education-title" className="section-title">학력</h2>
      <ul className="education-list">
        {schools.map((school) => (
          <li key={school.name} className="education-item">
            <span className="education-name">{school.name}</span>
            {school.status && <span className="education-status">{school.status}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Education
