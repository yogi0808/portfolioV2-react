import React, { useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/locomotive-scroll.css"
import gsap from "gsap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./screens/Hero"
import Skills from "./screens/Skills"
import AboutMe from "./screens/About"
import Work from "./screens/Work"
import Contact from "./screens/Contact"

export default function App() {
  const headerAndHeroTl = gsap.timeline()

  const containerRef = useRef()
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
