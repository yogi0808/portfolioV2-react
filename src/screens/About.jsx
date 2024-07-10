import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"

// Files
import Section from "../components/Section"
import Me from "../assets/me.webp"
import { aboutText } from "../constants"

const About = () => {
  const heading = "About Me".split("")

  let headingRef = useRef()
  let aboutRef = useRef()
  const triggerRef = useRef()
  const imgRef = useRef()

  const aboutMe = aboutText.split(" ")

  // GSAP animation for about me title, Image and description
  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(headingRef.children, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 60%",
        end: "25% 60%",
        scrub: 0.3,
      },
      y: 48,
      stagger: 0.1,
    }).from(aboutRef.children, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "-10% 50%",
        end: "113% bottom",
        scrub: 0.3,
      },
      opacity: 0.1,
      stagger: 1,
    })

    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "-10% 75%",
        end: "113% bottom",
        scrub: 2,
      },
      y: 100,
    })
  })
  return (
    <Section
      id="about"
      customClassis="sm:px-8 px-2 flex w-full flex-wrap-reverse gap-4 md:gap-0"
    >
      <div className="md:w-1/3 w-full flex items-center justify-center py-4">
        <img
          ref={imgRef}
          className=" rounded-lg opacity-75"
          src={Me}
          alt=""
          width={270}
        />
      </div>
      <div
        className="md:w-2/3 sm:px-8 w-full"
        ref={triggerRef}
      >
        <h1
          className="h1 uppercase font-bold flex clip-path leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] mb-4 sm:mb-7 opacity-70"
          ref={(el) => (headingRef = el)}
        >
          {heading.map((char, ind) =>
            char === " " ? (
              <span
                key={ind}
                className="block text-transparent"
              >
                .
              </span>
            ) : (
              <span
                key={ind}
                className="block"
              >
                {char}
              </span>
            )
          )}
        </h1>
        <p
          className="leading-8 opacity-40 flex flex-wrap"
          ref={(el) => (aboutRef = el)}
        >
          {aboutMe.map((char, ind) => (
            <span key={ind}>
              <span>{char}</span>
              <span className=" text-transparent">.</span>
            </span>
          ))}
        </p>
      </div>
    </Section>
  )
}

export default About
