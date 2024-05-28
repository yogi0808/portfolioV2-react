import React from "react"

const Footer = () => {
  const date = new Date()
  return (
    <div className="w-full border-t opacity-40 border-[#ffe8dc] px-4 md:px-12 py-2 md:py-4">
      <h6 className="h6 tracking-widest">
        &copy; Yogesh Gojiya {date.getFullYear()}
      </h6>
    </div>
  )
}

export default Footer
