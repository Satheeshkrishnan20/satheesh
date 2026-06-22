import { features } from './data/content'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Impact from './components/sections/Impact'
import Stack from './components/sections/Stack'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Trust from './components/sections/Trust'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Impact />
        <Stack />
        <Projects />
        <Services />
        <Trust />
        <Process />
        {features.testimonials && <Testimonials />}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
