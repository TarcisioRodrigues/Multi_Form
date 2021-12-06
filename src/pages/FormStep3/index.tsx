
import React, { ChangeEvent, useEffect } from 'react';
import { Theme } from '../../components/theme'
import { useHistory,Link } from 'react-router-dom'
import * as styles from './styles'
import { useForm,FormActions} from '../../contexts/FormContext'


export const FormStep3=()=>{
    const history=useHistory()
    const {state,dispatch}=useForm()

    useEffect(()=>{
        if(state.name===" "){
            history.push('/')
        }else{
        dispatch({
            type:FormActions.setCurrentStep,
            payload:3
        })
    }
    },[])
   
    const handleSend=()=>{
       if(state.email!==' ' && state.github!==' '){
        
        console.log(state)
       }else{
           alert('Preencha os campos')
       }
    }
    const handleEmailChange=(e:ChangeEvent<HTMLInputElement>)=>{
     dispatch({
         type:FormActions.setEmail,
         payload:e.target.value
     })   
    }
    const handleGithubChange=(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormActions.setGithub,
            payload:e.target.value
        })   
       }
return(
    <Theme>
        <styles.container>
            <p>Passo 3/3 </p>
            <h1>Legal {state.name} ,onde te achamos?</h1>
            <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

            <hr />
            <label >
                Digite seu email:
                <input type='text' autoFocus value={state.email} onChange={handleEmailChange} />
            </label>
            <label >
                Qual seu Github?:
                <input type='url' autoFocus value={state.github} onChange={handleGithubChange} />
            </label>
            <Link to='/step2' className="BackButton"> Anterior</Link>
            <button onClick={handleSend}>Proximo </button>
    </styles.container>
    </Theme>
)
}