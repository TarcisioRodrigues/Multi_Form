import React, {  ReactNode } from 'react'
import { Header } from '../Header'
import {SlideBarItem} from '../SlideBarItem'
import * as styles from './styles'
import { useForm } from '../../contexts/FormContext'
type Props={
children:ReactNode
}
export const Theme=({children}:Props)=>{
    const {state}=useForm()
    return(
            <styles.containers>
                <styles.Area>
                    <Header/>
                

                <styles.Steps>
                    <styles.SideBar>
                    <SlideBarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SlideBarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SlideBarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </styles.SideBar>
                    <styles.Page>
                        {children}
                    </styles.Page>
                </styles.Steps>
                </styles.Area>
            </styles.containers>
    )
}