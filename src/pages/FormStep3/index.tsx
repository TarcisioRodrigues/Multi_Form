
import React, { ChangeEvent, useEffect } from 'react'
import { Theme } from '../../components/theme'
import { useHistory,Link } from 'react-router-dom'
import * as styles from './styles'
import { useForm,FormActions} from '../../contexts/FormContext'

export const FormStep=()=>{
    const history=useHistory()
    const {state,dispatch}=useForm()

    useEffect(()=>{
        dispatch({
            type:FormActions.setCurrentStep,
            payload:3
        })
    },[])
   
    
    const handleNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
     dispatch({
         type:FormActions.setName,
         payload:e.target.value
     })   
    }
return(
    <Theme>
        <styles.container>
            <p>Passo 3/3 </p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo.</p>

            <hr />
            <label >
                Seu nome completo:
                <input type='text' autoFocus value={state.name} onChange={handleNameChange} />
            </label>
            <Link to='/' className="BackButton"> Anterior</Link>
    </styles.container>
    </Theme>
)
}