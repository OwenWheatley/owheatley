import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a href="https://twitter.com/OwenWheatley5" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/OwenWheatley" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>{' '}
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
