import * as React from "react"

const Footer = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10 19-7-7m0 0 7-7m-7 7h18"
    />
  </svg>
)

export default Footer;
