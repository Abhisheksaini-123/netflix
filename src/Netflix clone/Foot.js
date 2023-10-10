
import React from 'react'

export default function Foot() {
  return (
    <div>
     <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
            alt="Netflix Logo"
          />
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Netflix, Inc.</p>
        <ul className="footer__links">
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Cookie Preferences</a>
          </li>
          <li>
            <a href="/">Corporate Information</a>
          </li>
         
        </ul>
      </div>
    </footer>
    </div>
  )
}

