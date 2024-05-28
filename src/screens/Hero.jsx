import React, { Suspense, useRef } from "react"
import Section from "../components/Section"
import curve from "../assets/curve.png"
import { useGSAP } from "@gsap/react"
import { heroText } from "../constants"
import load from "../assets/logo light.gif"

const Spline = React.lazy(() => import("@splinetool/react-spline"))

const Hero = ({ tl }) => {
  const text1Characters = heroText[0].split("")
  const nameCharacters = heroText[1].split("")
  const text2Characters = heroText[2].split("")

  let text1Ref = useRef()
  let nameRef = useRef()
  let text2Ref = useRef()
  let splineRef = useRef()

  useGSAP(() => {
    tl.from(text1Ref.children, {
      y: 60,
      opacity: 0,
      stagger: 0.03,
    })
      .from(nameRef.children, {
        y: 60,
        opacity: 0,
        stagger: 0.03,
      })
      .from(text2Ref.children, {
        y: 60,
        opacity: 0,
        stagger: 0.03,
      })
      .from(splineRef.children, {
        opacity: 0,
        scale: 0.5,
      })
  })

  return (
    <Section
      id="hero"
      customClassis="mt-20 flex gap-8 flex-col items-center justify-center"
    >
      <div className="flex gap-4 flex-col">
        <h3
          ref={(el) => (text1Ref = el)}
          className="h5 font-medium clip-path flex leading-5"
        >
          {text1Characters.map((char, ind) =>
            char === " " ? (
              <span
                key={ind}
                className=" text-transparent"
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
        </h3>
        <h1
          ref={(el) => (nameRef = el)}
          className="h1 font-bold relative pb-3 md:pb-4 clip-path flex leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem]"
        >
          {nameCharacters.map((char, ind) =>
            char === " " ? (
              <span
                key={ind}
                className=" text-transparent"
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
          <span className=" absolute bottom-0 left-0 -z-10">
            <img
              className="w-32 md:w-36 ml-3 md:ml-4 lg:w-40 xl:w-48"
              src={curve}
              alt="curve"
            />
          </span>
        </h1>
        <h3
          ref={(el) => (text2Ref = el)}
          className="h5 font-medium clip-path flex leading-5"
        >
          {text2Characters.map((char, ind) =>
            char === " " ? (
              <span
                key={ind}
                className=" text-transparent"
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
        </h3>
      </div>
      <Suspense
        fallback={
          <div className="w-full h-[515px] sm:h-[502px] md:h-[450px] lg:h-[633px] flex items-center justify-center">
            <img
              src={load}
              alt="Loading..."
              width={150}
              className=" opacity-10"
            />
          </div>
        }
      >
        <Spline
          ref={(el) => (splineRef = el)}
          className="flex max-w-full  h-[515px] sm:h-[502px] md:h-[450px] lg:h-[633px] items-center justify-center aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/450] lg:aspect-[1024/450] pointer-events-none sm:pointer-events-auto"
          scene="https://prod.spline.design/i1GWAw-hnIuYVWE8/scene.splinecode"
        />
      </Suspense>
    </Section>
  )
}

export default Hero
