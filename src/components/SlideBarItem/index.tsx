import React from 'react'
import * as styles from './styles'
import {Link} from 'react-router-dom'
import {ReactComponent as ProfileIcon} from '../../assets/profile.svg'
import {ReactComponent as BookIcon} from '../../assets/book.svg'
import {ReactComponent as MailIcon} from '../../assets/mail.svg'

type Props={
    title:string;
    description:string;
    icon:string
    path:string
    active:boolean;
}

export const SlideBarItem=({description,icon,active,path,title}:Props)=>{
   
return(
    <styles.container>
        <Link to={path}>
            <styles.Info>
                <styles.Title>{title}</styles.Title>
                <styles.description>{description}</styles.description>
                 </styles.Info>
                 <styles.IconArea active={active}>
                        {icon=== 'profile'&&
                        <ProfileIcon fill="white" width={24} height={24} />
                        }
                         {icon=== 'book'&&
                        <BookIcon fill="white" width={24} height={24} />
                        
                        }
                         {icon=== 'mail'&&
                        <MailIcon fill="white" width={24} height={24} />
                        
                        }
                 </styles.IconArea>
                 <styles.Point active={active}>

                 </styles.Point>
        </Link>
    </styles.container>
)
}