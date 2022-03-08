import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from 'libs/firebase'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {BiCommentError} from 'react-icons/bi' 

import {Label} from 'ui/forms'
import {Input} from 'ui/forms'
import { SubmitButton } from 'ui/buttons'
import {LoginPageStyles, FormControl} from './styles'


function LoginPage(props) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigator = useNavigate()

  const notify = (error) => toast.error('Wrong Email / Password',{
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // icon:<BiCommentError/>

  });


  function onHandleSignIn(e){
      e.preventDefault();
 
      signInWithEmailAndPassword(auth,email,password)

      .then(userCredential=>{
        // move to dashboard
        navigator("dashboard")

      })
      .catch(error=>{
        notify(error)
      })




  }

  return (

     <LoginPageStyles>

       <ToastContainer />

       <header>
         <h1>Please Login</h1>
       </header>

       <form onSubmit={onHandleSignIn}>
          <FormControl>
            <Label>Email</Label>
            <Input type="text" placeholder="email.com" onChange={(e)=> setEmail(e.target.value)} />
          </FormControl> 

          <FormControl>
            <Label>Password</Label>
            <Input type="text" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
          </FormControl> 

          <FormControl>
            <SubmitButton bgcolor="red" margin="2rem 0">Sign In</SubmitButton>
          </FormControl>
       </form>

     </LoginPageStyles>

  )
}

export default LoginPage