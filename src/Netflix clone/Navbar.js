import React from 'react'

export default function Navbar() {
  return (
      <nav>
          <form>
            <a className='logo'> NETFLIX</a>     
            <select className='language'>
              <option >English</option>
              <option>हिन्दी</option></select>
            <button className="" type="submit">signout</button>
          </form>
      </nav>
  )
}

