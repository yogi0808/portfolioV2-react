import { useRef, useState } from "react"

const NavL = ({ link, handelClick, locoScroll }) => {
  const [isHover, setIsHover] = useState(false)

  const getTransformStyle = (isHover, ind) => ({
    transform: `translateY(${isHover ? "-100%" : "0%"})`,
    transitionDelay: `${ind * 0.05}s`,
    transitionDuration: "0.4s",
  })

  const titleSplit = (title) => {
    const titleArr = title.split("")

    return titleArr.map((item, ind) => (
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
    ))
  }
  let links = useRef()

  // prettier-ignore
  const option = {
    'offset': -70,
  }
  return (
    <h3
      className={`relative font-bold clip-path flex leading-5 cursor-pointer uppercase tracking-widest md:py-2 px-4 md:rounded-full overflow-hidden
      
        md:after:content-[''] md:after:absolute md:after:bottom-0 md:after:left-0 md:after:bg-[#FFE8DC] md:after:w-full md:after:translate-y-full md:after:h-0 hover:md:after:h-32 md:after:rounded-t-full hover:md:after:rounded-t-none hover:md:after:translate-y-1/3 md:after:transition-all md:after:duration-300 md:after:ease-in md:after:-z-10 
      
  
      w-full items-center justify-center border-b py-8 md:w-fit md:border-0 border-zinc-400 last:border-0`}
      ref={(el) => (links = el)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        locoScroll.scrollTo(`${link.url}`, option)
        handelClick()
      }}
    >
      {titleSplit(link.title)}
    </h3>
  )
}

export default NavL
