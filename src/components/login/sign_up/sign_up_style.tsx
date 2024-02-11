import {styled} from "styled-components"


export const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:var(--background-color);
    display:flex;
    align-items:center;
    justify-content:center;
    .sec-container{
        display:flex;
        align-items:center;
        gap:50px;

    }
    .meal{
        width:450px;
    }
    .sign-info{
        width:100%;
        max-width:450px;
        height:fit-content;
        display:flex;
        flex-direction:column;
        align-items:center;

    }
    .logo_img{
        width:200px;
    }
    .welcome{
        text-align:center;
        margin:0;
        margin-top:20px;
    }
    .inputs{
        width:80%;
        display:flex;
        align-items:center;
        flex-direction:column;
        gap:20px;
    }
    .input{
        width:100%;
        height:40px;
        outline:none;
        border-radius:8px;
        border:1px solid #000;
        padding-left:10px;
    }
    .sign_up_btn{
        width:100%;
        height:40px;
        background-color:#0077b6;
        margin-top:20px;
        border-radius:8px;
        color:#fff;
        font-weight:500;
        cursor: pointer;
    }
`
