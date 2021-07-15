import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../assets/header.sass"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div className="header-wrapper"
      style={{
        maxWidth: 1500,
        margin: `auto`,
        padding: `1.45rem 1.0875rem`,
        textAlign: `left`
      }}
    >
      <h1  style={{ margin: 0 }}>
        <Link className="logo-name"
          to="/"
          style={{
            textDecoration: `none`,
            fontFamily: `plum`,
            fontSize: `3rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
