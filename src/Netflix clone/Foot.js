// import React from 'react'

// export default function Foot() {
//   return (
//     <div>
//       <ul className='footer '>
//         <li>   FAQ
//      </li>
//         <li>     Help Centre
//    </li>
//         <li>Account
// </li>
//         <li>    Media Centre
//    </li>
//         <li>     Investor Relations
//   </li>
//         <li>    Jobs
//    </li>
//         <li>     Ways to Watch
//   </li>
//         <li>     Terms of Use
//   </li>
//         <li>    Privacy
//    </li>
//         <li>    Cookie Preferences
//    </li>
//         <li>    Corporate Information
//    </li>
//         <li>   Contact Us
//     </li>
//         <li>   Speed Test
//     </li>
//         <li>    Legal Notices
//    </li>
//         <li>    Only on Netflix   </li>
//       </ul>
//     </div>
//   )
// }
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
        <p>© {new Date().getFullYEAR()} Netflix, Inc.</p>
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
          <li>
            <a href="/">Corporate Information</a>
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

