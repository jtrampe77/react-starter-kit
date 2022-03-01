import React from 'react'
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
  
  return (

     <LoginPageStyles>
       <header>
         <h1>Please Login</h1>
       </header>

      <FormControl>
        <Label>Email</Label>
        <Input type="text" placeholder="email.com" />
      </FormControl> 

      <FormControl>
        <Label>Password</Label>
        <Input type="text" placeholder="password" />
      </FormControl> 

      <FormControl>
        <SubmitButton bgcolor="red" margin="2rem 0">Sign In</SubmitButton>
      </FormControl>

     </LoginPageStyles>

  )
}

export default LoginPage