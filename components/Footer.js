import React from "react"

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-3 py-3">
          <a href="https://twitter.com/gamedevjared89" target="_blank">
              <i className="fa-brands fa-twitter duration-300 hover:opacity-30 cursor-pointer"></i>
          </a>
          <a href="https://linkedin.com/in/jaredhooker" target="_blank">
              <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
          </a>
          <a href="https://github.com/jrh89" target="_blank">
              <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer"></i>
          </a>
          <a href="https://jaredsportfolio.netlify.app" target="_blank">
              <i className="fa-solid fa-house-chimney duration-300 hover:opacity-30 cursor-pointer"></i>
          </a>
    </div>
  )
}

