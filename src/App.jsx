import { Analytics }   from '@vercel/analytics/react'
import Cursor          from './components/Cursor'
import ScrollProgress  from './components/ScrollProgress'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import Skills          from './components/Skills'
import Projects        from './components/Projects'
import Experience      from './components/Experience'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
