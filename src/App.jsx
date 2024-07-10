import gsap from "gsap"
import { useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/locomotive-scroll.css"

// Files
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./screens/Hero"
import Skills from "./screens/Skills"
import AboutMe from "./screens/About"
import Work from "./screens/Work"
import Contact from "./screens/Contact"

export default function App() {
  // Creating time line for Header and Hero section
  const headerAndHeroTl = gsap.timeline()

  const containerRef = useRef()

  // Configuring Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({
    el: containerRef.current,
    smooth: true,
    multiplier: 1,
  })

  return (
    <>
      <main ref={containerRef}>
        <Header tl={headerAndHeroTl} />
        <Hero tl={headerAndHeroTl} />
        <Skills />
        <AboutMe />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
