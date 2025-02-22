import React,{useState} from 'react';
import {TextField,Button,Switch,FormControlLabel} from "@material-ui/core"



export default function FormularioCadastro({aoEnviar,validarCPF}){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
   
  return(
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            }}
        >
            <TextField 
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                label="Nome" 
                fullWidth 
                margin="normal"
                requerid 
                variant="outlined" 
                id="outlined-basic" 
            />

            <TextField 
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                label="Sobrenome" 
                fullWidth 
                requerid 
                margin="normal" 
                variant="outlined" 
                id="outlined-basic" 
            />

            <TextField 
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}

                onBlur={(event)=>{
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                label="CPF" 
                fullWidth 
                requerid 
                margin="normal" 
                variant="outlined" 
                id="outlined-basic" 
            />

            <FormControlLabel
              label="Promoções"
              control={
                <Switch
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked);
                    }}
                    name="promocoes"
                    color="primary"
                 />
              }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        name="novidades"
                        color="primary"
                    />
                }
            />
               
            <Button  type="Submit" variant="contained" color="primary">
                 Cadastrar
            </Button>
            </form>
    );
}
