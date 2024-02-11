import styled from "styled-components";

export const Container = styled.div`
    padding-top:180px;
    height:100vh;
    width:100%;
    h1{
        margin:0 auto;
        width:fit-content;
        font-family:var(--main-font);
        
    }
    .t_head{
        margin-top:50px;
        width:100%;
        max-width:1000px;
        height:50px;
        background-color:var(--background-primary-cl)
    }
    table{
        width:100%;
        max-width:1000px;
        border-collapse:collapse;
        margin:0 auto;
        margin-top:30px;
    }
    .head_row{
        background-color:var(--background-primary-cl);
        height:50px;
    }

    th{
        color:#fff;
    }
    .item_row td{
        padding: 10px 0;
        text-align:center;
        font-family:var(--sec-font);
    }
    .item_row{
        border-bottom:1px solid var(--text-secondary-cl)
    }
    .img{
        width:60px;
        height:60px;
        border-radius:8px;
        border:1px solid var(--text-primary-cl);
        object-fit:cover;
    }
    .delete{
        width:70px;
        height:30px;
        background-color: red;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:5px;
        margin:0 auto;
        cursor: pointer;
        padding:0 10px;
        box-sizing:content-box;
    }
   .delete:hover{
    -webkit-animation: vibrate-1 0.3s linear infinite both;
    animation: vibrate-1 0.3s linear infinite both;
   }
`