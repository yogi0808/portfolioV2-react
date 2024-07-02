import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Section from "../components/Section"
import { useRef } from "react"
import { works } from "../constants"
import Button from "../components/Button"
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  let wrapper = useRef()
  const pinnerRef = useRef()

  let mm = gsap.matchMedia()
  mm.add("(min-width: 768px)", () => {
    useGSAP(() => {
      gsap.to(wrapper.children, {
        scrollTrigger: {
          trigger: pinnerRef.current,
          start: "top 10%",
          end: 3000,
          pin: true,
          scrub: 1,
        },
        y: 0,
        stagger: 2,
      })
    })
  })
  return (
    <div
      className="w-full flex items-center justify-center flex-col md:gap-8"
      ref={pinnerRef}
    >
      <Section
        customClassis="sm:px-8 px-2 flex items-center justify-center flex-col md:gap-8 pb-12"
        id="works"
      >
        <h1 className="h1 font-bold opacity-70">Work</h1>
        <div
          className="w-full flex flex-col items-center justify-center relative md:h-[330px] overflow-hidden max-md:gap-8"
          ref={(el) => (wrapper = el)}
        >
          {works.map((work) => (
            <div
              className="flex max-md:border max-md:border-[#ffe8dc] max-md:p-4 rounded-md w-full xl:w-[80%] md:max-h-[350px] flex-wrap-reverse md:absolute bg-[#111] noise md:translate-y-full overflow-hidden first:translate-y-0 max-md:justify-center max-md:gap-8"
              key={work.id}
            >
              <div className="md:w-1/2 w-full flex flex-col justify-center gap-4 md:pr-10 max-md:items-center">
                <h1 className="h3 font-semibold opacity-70">{work.title}</h1>
                <p className=" opacity-40 line-clamp-5">{work.description}</p>
                <div className="flex flex-wrap">
                  {work.techStack.map((item, ind) => (
                    <span
                      key={ind}
                      className="pr-6 py-1 font-bold l opacity-70 tracking-widest"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {work.link === "#" ? (
                  ""
                ) : (
                  <Button
                    text="View Repo"
                    link={work.link}
                  />
                )}
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <img
                  className="w-full sm:w-2/3 md:w-auto md:h-[330px] rounded-lg opacity-70"
                  src={work.img}
                  alt={work.title}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Work
