import React from "react";
import './App.css';
import FormularioCadastro from "./Components/Cadastro.jsx"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function App() {
  return (
   
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center"> Formulario de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
      </Container>
    
  );
  function aoEnviarForm(dados){
    console.log(dados);
  }
  function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }
}


