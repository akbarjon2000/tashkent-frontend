import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-wrap:wrap;
    overflow:hidden;

    .about-text{
        width:50%;
        height:100vh;
        background-color:rgb(50 45 40);
        gap:10px;
    }
    .image-div{
        width:50%;
    }
    .image{
        width:100%;
        
        height:100vh;
        object-fit:cover;
    }
    .title{
        font-size:20px;
        font-family:var(-fs-sec);
        color:#fff;
        margin:0;
        line-height:35px;

    }

    .name{
        font-size:40px;
        font-family:cursive;
        margin:0;
        line-height:35px;
        text-align:center;
        color:#fff;
    }
    .text{
        max-width:450px;
        color:white;
        margin: 0 auto;
        text-align:center;
    }
    .dash{
        height:10px;
        width:100px;
        border-top:3px solid #fff;
        border-bottom:3px solid white;
    }
    @media(max-width:500px){
        &{
            display:column;

        };
        .about-text{
            width:100%;
        }
        .image-div{
            width:100%;
        }
    }
   
`