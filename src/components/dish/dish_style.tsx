import { styled } from "styled-components";

export const Container = styled.div`
    width:100%;
    height:fit-content;
    min-height:100vh;
    background-color:var(--background-color);
    display:flex;
    /* align-items:center; */
    justify-content:center;
    gap:50px;
    padding-top:150px;
    
    .col1{
        width:40%;
        height:fit-content;
    }
    .name{
        color: #A80000;
        font-family: var(--main-font);
        font-size: 120px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -3.6px;
        margin-bottom:0;
        margin-top:50px;
    }
    .desc{
        font-family: var(--sec-font);
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.66px;
    }
    .count{
        display:flex;
        gap:10px;
        align-items:center;
        font-size:20px;
        margin-top:50px;
        margin-bottom:50px;
    }
    .dec{
        width:30px;
        height:30px;
        border-radius:10px;
        border:2px solid var(--text-primary-cl);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:25px;
        padding-bottom:5px;
        cursor:pointer;
    }
    .btns{
        display:flex;
        flex-wrap:wrap;
        gap:20px;
        margin-top:100px;
    }
    .add{
        text-decoration:none;
        width: 240px;
        height: 56px;
        background-color:var(--text-primary-cl);
        border-radius:8px;
        color:#fff;
        color: #FFF;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 0.88px;
        display:flex;
        align-items:center;
        justify-content:center;
        /* border-bottom-right-radius:; */
        cursor: pointer;
        padding:0 10px;
        box-sizing:content-box;
    }
    .table{
        background-color:var(--background-primary-cl);
    }
    .img{
        width: 600px;
        height: 600px;
        object-fit:cover;
        border-radius:20px;
    }
    .modal_div{
        width:100%;
        height:100vh;
        position:absolute;
        top:0;
        left:0;
        z-index:3;
        display:flex;
        display:none;
        align-items:center;
        justify-content:center;
        background-color:rgba(0, 0, 0, 0.4);
    }
    .modal{
        width:400px;
        height:300px;
        border-radius:10px;
        background:#FFF8EE;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        padding:50px 0;
    }
    .m_header{
        font-size:25px;
        color:green;
        background-color:none;
        margin-top:0;
        font-weight:700;
    }
`