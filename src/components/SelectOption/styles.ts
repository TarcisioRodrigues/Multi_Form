import styled from "styled-components";

export const container=styled.div<{selected:boolean}>`
display: flex;
border: 2px solid ${props=>props.selected ? '#25CD89':'#16195C'};
padding: 20px;
margin-bottom: 15px;
align-items: center;
cursor: pointer;
border-radius: 10px;

&:hover{
    border: 2px solid #496459;
}
`
export const Icon=styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background-color: #191A59;
display: flex;
justify-content: center;
align-items: center;

`

export const Info=styled.div`
flex: 1;
margin-left: 10px;
`

export const Title=styled.div`
font-size: 17px;
font-weight: bold;
margin-bottom: 7px;
`

export const description=styled.div`
font-size: 14px;
color: #B8B8D4;
`
