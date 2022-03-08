import styled from "styled-components";


const LoginPageStyles = styled.section`
  max-width: 400px;
  margin:2rem auto;

  h1{
    font-size:2rem;
  }

  header{
    margin-bottom:2rem;
  }

  .Toastify__toast {
    background-color:black;
    color: white;
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background-color: green;
    color: white;
  }

 
`

const FormControl = styled.div`
    margin-bottom: 1rem;
`

export {LoginPageStyles, FormControl}