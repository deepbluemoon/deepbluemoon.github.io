import { profile } from './profile'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="page">
      <Header name={profile.name} tagline={profile.tagline} />
      <About paragraphs={profile.about} />
      <Skills skills={profile.skills} device={profile.device} />
      <Education schools={profile.education} />
      <Projects projects={profile.projects} />
      <Contact github={profile.contact.github} email={profile.contact.email} />
    </main>
  )
}

export default App
