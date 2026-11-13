type AboutProps = {
  paragraphs: string[]
}

function About({ paragraphs }: AboutProps) {
  return (
    <section className="section" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">소개</h2>
      {paragraphs.map((text) => (
        <p key={text} className="about-text">{text}</p>
      ))}
    </section>
  )
}

export default About
