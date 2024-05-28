import { useRef, useState } from "react"

const Button = ({ text, link, customClassis, onClick, duration }) => {
  const [isHover, setIsHover] = useState(false)

  const getTransformStyle = (isHover, ind) => ({
    transform: `translateY(${isHover ? "-100%" : "0%"})`,
    transitionDelay: `${ind * 0.03}s`,
    transitionDuration: `${duration ? duration : "0.2s"}`,
  })

  const textSplit = (title) => {
    const titleArr = title.split("")

    return titleArr.map((item, ind) =>
      item === " " ? (
        <span
          key={ind}
          className="relative mix-blend-difference flex flex-col overflow-hidden transition-transform duration-[0.5s] ease-out"
        >
          <span
            className=" text-transparent"
            style={getTransformStyle(isHover, ind)}
          >
            .
          </span>
          <span
            style={getTransformStyle(isHover, ind)}
            className=" absolute top-full w-full text-transparent"
          >
            .
          </span>
        </span>
      ) : (
        <span
          key={ind}
          className="relative mix-blend-difference flex flex-col overflow-hidden transition-transform duration-[0.5s] ease-out"
        >
          <span style={getTransformStyle(isHover, ind)}>{item}</span>
          <span
            style={getTransformStyle(isHover, ind)}
            className=" absolute top-full w-full"
          >
            {item}
          </span>
        </span>
      )
    )
  }

  let texts = useRef()

  return link ? (
    <a
      className={`flex bg-[#ffe8dc] opacity-70 px-4 py-2 w-fit rounded-full text-xl clip-path leading-6 ${
        customClassis ? customClassis : ""
      }`}
      target="_blank"
      href={link}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {textSplit(text)}
    </a>
  ) : (
    <button
      className={`flex bg-[#ffe8dc] opacity-70 px-4 py-2 w-fit rounded-full text-xl clip-path leading-6 ${
        customClassis ? customClassis : ""
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={(el) => (texts = el)}
    >
      {textSplit(text)}
    </button>
  )
}

export default Button
