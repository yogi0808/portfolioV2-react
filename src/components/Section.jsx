const Section = ({ children, customClassis, id }) => {
  return (
    <section
      data-scroll-section
      id={id}
      className={`w-full relative pt-10 lg:pt-16 xl:pt-20 max-w-[1440px] mx-auto ${
        customClassis ?? customClassis
      }`}
    >
      <div className="hidden md:block pointer-events-none absolute bottom-0 w-px left-5 top-10 lg:top-16 xl:top-20 bg-[#FFE8DC] opacity-30" />
      <div className="hidden md:block pointer-events-none absolute bottom-0 w-px right-5 top-10 lg:top-16 xl:top-20 bg-[#FFE8DC] opacity-30" />
      {children}
    </section>
  )
}

export default Section
