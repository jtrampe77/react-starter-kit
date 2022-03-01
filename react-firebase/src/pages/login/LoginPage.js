import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function LoginPage(props) {
  // window.location.assign('page.html')

  // router   navigate to a path
  let navigation = useNavigate();

  function onHandleSubmit(e){
    e.preventDefault();
    navigation('dashboard');

    // FIREBASE AUTH

  }

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
     <header>
        <h1>Login Page</h1>
    </header>

    <form onSubmit={onHandleSubmit}>
      <input type="text" />
      <button type='submit'>Submit</button>
    </form>



    </>
   
  )
}

export default LoginPage