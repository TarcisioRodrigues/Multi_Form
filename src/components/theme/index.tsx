import React, { Children, ReactNode } from 'react'
import { Header } from '../Header'
import * as styles from './styles'
type Props={
children:ReactNode
}
export const Theme=({children}:Props)=>{
    return(
            <styles.containers>
                <styles.Area>
                    <Header/>
                

                <styles.Steps>
                    <styles.SideBar>
                        ...
                    </styles.SideBar>
                    <styles.Page>
                        {children}
                    </styles.Page>
                </styles.Steps>
                </styles.Area>
            </styles.containers>
    )
}