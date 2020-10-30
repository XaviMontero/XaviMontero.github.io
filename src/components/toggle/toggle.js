import React from "react"
import "./toggle.scss"
import useDarkMode from "use-dark-mode"
import { useSpring, animated } from "react-spring"

const DarkModeToggle = ({ mobile }) => {
  const darkMode = useDarkMode(false)

  const darkModeToggleSpring = useSpring({
    delay: 200,
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <animated.div style={darkModeToggleSpring} id="toggle">
      <input
        type="checkbox"
        id="dn"
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <label htmlFor="dn" id="cenita" className="toggle">
        <span id="cena" className="toggle__handler">
          <span className="crater crater--1" />
          <span className="crater crater--2" />
          <span className="crater crater--3" />
        </span>
        <span className="star star--1" />
        <span className="star star--2" />
        <span className="star star--3" />
        <span className="star star--4" />
        <span className="star star--5" />
        <span className="star star--6" />
      </label>
    </animated.div>
  )
}

export default DarkModeToggle
