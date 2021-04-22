import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from '../components/image'
import "../assets/header.sass"
const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <h1 className="name">David Pina</h1>
      <div>
        <a className="social-links">
          <Image className="social-link-images" filename="instagram.png"/>
        </a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
