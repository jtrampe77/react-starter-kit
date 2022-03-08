import React, {useState} from 'react'
import {AppBar} from './../../components/appbar'
import {Link} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'
import {useNavigate} from 'react-router-dom'

function DashBoardPage(props) {

  const [isUser, setIsUser] = useState(false)
  const navigator = useNavigate()

  onAuthStateChanged(auth, (user)=>{
    if(user){
        setIsUser(true)
    }else{
        setIsUser(false)
        //login page
        navigator('/')
    }
  })

  if(isUser){
    return(
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
  
  }else{
    return null
  }

}

export default DashBoardPage