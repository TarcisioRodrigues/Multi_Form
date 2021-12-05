
import React, { useEffect } from 'react'
import { Theme } from '../../components/theme'
import { useHistory ,Link} from 'react-router-dom'
import * as styles from './styles'
import { useForm,FormActions} from '../../contexts/FormContext'
import { SelectOption } from '../../components/SelectOption'

export const FormStep2=()=>{
    const history=useHistory()
    const {state,dispatch}=useForm()

    useEffect(()=>{
        if(state.name===" "){
            history.push('/')
        }else{
        dispatch({
            type:FormActions.setCurrentStep,
            payload:2
        })
    }
    },[])
    const setLevel=(level:number)=>{
        dispatch({
            type:FormActions.setLevel,
            payload:level
        })
    }
    const handleNextStep=()=>{
      if(state.name !== ' '){
        history.push("/step3")
      }else{
          alert('Digite um nome')
      }
    }
    
return(
    <Theme>
        <styles.container>
            <p>Passo 2/3 </p>
            
            <h1>{state.name},o que melhor descrever você</h1>
            <p>Escolha a opção que melhor condiz com seu estado atual,profissionalmente.</p>

            <hr />
            <SelectOption title="Sou iniciante" description="Comecei a programar a menos de 2 anos" icon=" 😇" selected={state.level===0} onClick={()=>setLevel(0)} />
            <SelectOption title="Sou programador" description="Comecei a programar de 2 anos pra frente" icon="  🏢"  selected={state.level===1} onClick={()=>setLevel(1)} />
            <Link to='/' className="BackButton"> Anterior</Link>
            <button onClick={handleNextStep}>Proximo </button>
    </styles.container>
    </Theme>
)
}