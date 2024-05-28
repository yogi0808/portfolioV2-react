const MenuSvg = ({ isNavOpen }) => {
  return (
    <svg
      className="overflow-visible"
      width="24"
      height="24"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-all origin-center"
        y={isNavOpen ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="#FFE8DC"
        transform={`rotate(${isNavOpen ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center"
        y={isNavOpen ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="#FFE8DC"
        transform={`rotate(${isNavOpen ? "-45" : "0"})`}
      />
    </svg>
  )
}

export default MenuSvg
