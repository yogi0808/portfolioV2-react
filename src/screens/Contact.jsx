import { useRef, useState } from "react"
import { motion } from "framer-motion"

// Files
import Logo from "../assets/svg/Logo"
import { socialLinks } from "../constants"
import Section from "../components/Section"
import Button from "../components/Button"

const Contact = () => {
  const [email, setEmail] = useState("gojiyayogesh08@gmail.com")
  let linsRef = useRef()

  // Handling Copy text on Click
  const handelClick = () => {
    navigator.clipboard.writeText(email)
    setEmail("Email Copied")
    setTimeout(() => {
      setEmail("gojiyayogesh08@gmail.com")
    }, 5000)
  }

  return (
    <Section
      customClassis="sm:px-8 px-2 py-6 md:py-12 mb-10 lg:mb-16 xl:mb-20"
      id="contact"
    >
      <div className="w-full flex flex-wrap gap-16 lg:gap-0">
        <div className="lg:w-2/3 w-full flex items-center sm:items-start justify-center flex-col md:pl-8 gap-4">
          <h5 className="h5 font-medium tracking-wider opacity-60">
            Get in touch <span className="h6">(Click to copy)</span>
          </h5>
          <Button
            duration="0.15s"
            text={email}
            customClassis="sm:text-4xl leading-10 sm:px-8 sm:py-4 rounded-xl"
            onClick={handelClick}
          />
        </div>
        <div className="lg:w-1/3 w-full flex items-center justify-center ">
          <div className="w-80 h-80 flex relative items-center justify-center rounded-full border border-[#FFE8DC] opacity-60">
            <div className="w-44 h-44 flex items-center justify-center rounded-full border border-[#FFE8DC] opacity-60">
              <div className="w-24 opacity-60">
                <Logo />
              </div>
              <motion.div
                ref={(el) => (linsRef = el)}
                className="h-full w-full absolute"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {socialLinks.map((item) => (
                  <a
                    className={`absolute ${item.classis} transition-opacity ease-in opacity-60 hover:opacity-100`}
                    key={item.id}
                    href={item.link}
                    target="_blank"
                  >
                    <motion.img
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                      }}
                    />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
