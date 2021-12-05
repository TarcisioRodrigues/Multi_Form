import React from "react";
import * as styles from './styles'
type Props ={
    title:string;
    description:string;
    icon:string
    selected:boolean
    onClick:()=>void

}
export const SelectOption=({description,icon,title,selected,onClick}:Props)=>{
    return(
        <styles.container selected={selected} onClick={onClick}>
            <styles.Icon>{icon}</styles.Icon>
            <styles.Info>
                <styles.Title>
                    {title}
                </styles.Title>
                <styles.description>
                    {description}
                </styles.description>
            </styles.Info>
        </styles.container>
    )
}