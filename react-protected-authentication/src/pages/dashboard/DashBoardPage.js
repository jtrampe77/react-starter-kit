import React from 'react'
import {AppBar} from './../../components/appbar'
import {Link} from 'react-router-dom'

function DashBoardPage(props) {
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

    <AppBar />
    </>
      

  )
}

export default DashBoardPage