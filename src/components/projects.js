import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }

  render() {
    return (
      <section>
        <h3 className="heading">
          <span>03.</span>Projects
        </h3>
      </section>
    )
  }
}

export default Projects
