import {styled} from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-image: url("./Background.png");
    background-size:100%;
    
    .logo{
        width:150px;
        height:90px;
        position:absolute;
        top:50px;
        left:70px;
    }
    .welcome{
        color: #F2F2F2;
        font-family: Montserrat Alternates;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position:absolute;
        bottom:250px;
        left:100px;
        width:500px;
    }
    .form{
        width: 744px;
        height: 400px;
        border-radius: 37px;
        background: rgba(242, 242, 242, 0.41);
        position:absolute;
        bottom:150px;
        right:50px;
        padding: 0 74px;
        display:flex;
        flex-direction:column;
        align-items:end;
        /* justify-content:end; */
        /* gap:50px; */
    }
    input{
        width: 479px;
        height: 57px;
        outline:none;
        border:none;
        border-radius: 20px;
        background: #F2F2F2;
        padding-left:30px;
        font-size:20px;
    }
    input::placeholder{
        font-size:20px;
    }
    .sign_up_link{
        width: 479px;
        font-size:30px;
        color:#F2F2F2;
        font-weight:500;
    }
    .login_btn{
        width: 172px;
        height: 64px;
        margin-top:50px;
        padding:0;
        text-align:center;
        border-radius:30px;
        cursor:pointer;
    }
    @media(max-width:800px){
        display:flex;
        align-items:center;
        justify-content:center;
        background-image:none;
        background-color:#f2cc8f;
        .welcome{
            display:none;
        }
        .form{
            width:90%;
            max-width:700px;
            min-width:400px;
            position:unset;
            margin:0 auto;
            align-items:center;
            justify-content:center;
            padding:0;
        }
        input{
            max-width:90%;
        }
        .sign_up_link{
            max-width:90%;
            text-align:center;
        }
        .login_btn{
            width:130px;
            height:40px;
        }
        
    }
`