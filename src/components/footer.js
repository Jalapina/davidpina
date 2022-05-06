import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "../assets/footer.sass"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="footer-wrapper">
        <p class="footer">David Pina ©2019</p>
    </div>
    <div class="contact">
        <div className="social-media-wrapper">
            <a class="links" href="https://github.com/Jalapina" title="github">
                <Image filename="github-logo-silhouette-in-a-square.png"/>
            </a>
        </div>
        <div className="social-media-wrapper">
            <a class="links" href="https://www.linkedin.com/in/david-pina-8a46128a/" title="linkedin">
                <Image filename="linkedin.png"/>
            </a>
        </div>
        <div className="social-media-wrapper jalapina">
            <a class="links" href="https://www.jalapina.com/" title="jalapina">
                <Image filename="jalapeno.png"/>
            </a>
        </div>
        <div className="social-media-wrapper jalapina">
            <a class="links" href="https://www.youtube.com/channel/UCcXwNOc2qDlk043kJfbKPgA" title="youtube">
                <Image filename="youtube.png"/>
            </a>
        </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
