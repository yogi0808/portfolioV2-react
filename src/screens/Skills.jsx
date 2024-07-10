import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { motion } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Files
import Section from "../components/Section"
import SkillsSvgs from "../assets/svg/SkillsSvgs"

// Registering GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const wrapper = useRef()
  let headingRef = useRef()

  const heading = "Skills".split("")

  // GSAP animation for title text
  useGSAP(() => {
    gsap.from(headingRef.children, {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 60%",
        end: "25% 60%",
        scrub: 0.3,
      },
      y: 48,
      stagger: 0.1,
    })
  })

  return (
    <Section
      id="skills"
      customClassis="flex gap-4 md:gap-8 flex-col items-center justify-center"
    >
      <h1
        className="h1 uppercase font-bold flex clip-path leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] opacity-70"
        ref={(el) => (headingRef = el)}
      >
        {heading.map((char, ind) => (
          <span
            key={ind}
            className="block"
          >
            {char}
          </span>
        ))}
      </h1>
      <div
        className="h-[60vh] border-2 p-2 sm:p-5 lg:p-6 flex flex-wrap gap-3 md:gap-6 lg:gap-14 mx-2 sm:mx-auto sm:aspect-[60/40] rounded -[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] relative max-w-[897px]"
        ref={wrapper}
      >
        <p className=" opacity-55 absolute text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          You can Drag it around
        </p>
        {SkillsSvgs.map((svg, ind) => {
          return (
            <motion.div
              className={`h-[50px] sm:h-16 cursor-grab`}
              key={ind}
              drag
              dragConstraints={wrapper}
              dragElastic={0.5}
              whileDrag={{ scale: 1.3 }}
            >
              {svg}
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default Skills
