import React from 'react'
import {Link} from 'react-router-dom'

function PageNoteFound() {
  return (
    <>
    <nav>
      <ul>
        <li>
        <Link to="/">Login</Link>
        </li>
        
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>

    <h1>Page Not Found</h1>
    </>
  )
}

export default PageNoteFound