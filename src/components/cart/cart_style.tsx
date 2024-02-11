import { styled, keyframes } from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;
    padding-top:150px;
    background-color:var(--background-color);
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
    .head_div{
        display:flex;
        gap:20px;
        align-items:center;
    }
    .heading{
        color:var(--text-primary-cl);
        font-family: David Libre;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 72px;
        margin-top:0;
        margin-bottom:0;
    }
    .cart_icon{
        width:100px;
        height:100px;
        font-size:50px;
        color:var(--background-primary-cl);
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
    .checkout{
        width:100%;
        max-width:1000px;
        display:flex;
        flex-direction:column;
        align-items:end;
    }
    .total{
        font-family:Inter;
        font-size:20px;
        font-weight:500;
    }
    .total span{
        font-size:25px;
        font-weight:700;
    }
    .check_btn{
        width:200px;
        height:40px;
        border-radius:20px;
        background-color:lightblue; 
        font-weight:500;
        cursor: pointer;
    }

    .vibrate-1 {
    
  }

  .confirm_text{
    color:green;
    font-size:var(--fs-sc);

  }
  .confirm_btn{
    text-decoration:none;
    width:fit-content;
    height:40px;
    font-size:var(--fs-sm);
    background-color:#0077b6;
    color:#fff;
    padding:10px;
    font-weight:700;
    border-radius:8px;
    cursor:pointer;
  }

@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

`