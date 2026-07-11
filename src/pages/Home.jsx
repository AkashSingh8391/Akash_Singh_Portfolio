import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Achievements from '../components/Achievements'
import GithubStats from '../components/GithubStats'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <GithubStats />
      <Contact />
    </>
  )
}
