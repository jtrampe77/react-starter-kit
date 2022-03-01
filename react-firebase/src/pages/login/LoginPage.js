import React, {useState} from 'react'
import styled from 'styled-components'
import {Label} from '../../ui/forms'
import {Input} from '../../ui/forms'
import { SubmitButton } from '../../ui/buttons'

const LoginPageStyles = styled.section`
  max-width: 400px;
  margin:2rem auto;

  h1{
    font-size:2rem;
  }

  header{
    margin-bottom:2rem;
  }

`

const FormControl = styled.div`
    margin-bottom: 1rem;
`



function LoginPage(props) {
  
  console.log("component render")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onHandleSignIn(e){
      e.preventDefault();
      console.log(email, password)
      // Send email password to firebase to authenticate 
      // or show error


  }

  return (

     <LoginPageStyles>
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