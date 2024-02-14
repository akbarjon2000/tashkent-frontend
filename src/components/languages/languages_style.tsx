import {styled} from "styled-components"

export const Container = styled.div<{display:boolean, navdisplay:boolean}>`
    position:absolute;
    width:0;
    height:0;
    top:0;
    right:0;
    /* background-color:${({display}) => display ? "var(--background-primary-cl)" : "transparent"}; */
    border-bottom-left-radius:150px;
    background-color:var(--background-primary-cl);
    z-index:4;
    transition: all 0.5s ease-in-out;
    &:hover{
        
        width:150px;
    height:150px;
    }
    .globe{
        width:40px;
        height:40px;
        cursor:pointer;
        position:absolute;
        top:10px;
        right:10px;
    }
    .uz{
        width:40px;
        height:40px;
        border-radius:50%;
        position:absolute;
        left:25px;
        top:15px;
        border:2px solid;
        color:#fff;
        cursor:pointer;
        font-weight:500;
    }
    .eng{
        width:40px;
        height:40px;
        border-radius:50%;
        position:absolute;
        left:50px;
        bottom:50px;
        border:2px solid;
        color:#fff;
        cursor: pointer;
        font-weight:500;
    }
    .kor{
        width:40px;
        height:40px;
        border-radius:50%;
        position:absolute;
        left:100px;
        bottom:20px;
        border:2px solid;
        color:#fff;
        cursor: pointer;
        font-weight:500;
    }
    @media(max-width:590px){
        display:${({navdisplay}) => navdisplay ? "none" : "block"};
    }
`