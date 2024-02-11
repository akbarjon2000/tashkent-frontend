import { styled } from "styled-components";

export const Container = styled.div<{path:string, display:boolean}>`
box-sizing:border-box;
    width:100%;
    height:fit-content;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:10px 180px;
    padding-top:30px;
    position:fixed;
    top:0;
    left:0;
    z-index:3;
    ${({ path }) =>
    path === "/" ?
    `
    background-color:#fff;
    `: "background-color:rgba(243, 244, 244, 1);"}
    .logo{
        text-decoration:none;
        display:flex;
        flex-direction:row !important;
        color:var(--text-primary-cl);
        position:relative;
        align-items:center;
        width:fit-content;
    }
    .logo img{
        width:120px;
        /* height:100px; */

    }
    .logo h2{
        width:fit-content;
        margin:0;
    }
    .nav{
        display:flex;
        align-items:center;
        gap:45px;
        flex-wrap:wrap;
        row-gap:10px;
        padding:0 10px;
    }
    .link{
        text-decoration:none;
        color:var(--text-primary-cl);
        gap:15px;
        display:flex;
        align-items:center;

    }
    .link_icon{
        font-size:20px;
        color:var(--background-primary-cl);
    }
    .book_bnt{
        width:167px;
        height:54px;
        border-top-left-radius:15px;
        border-bottom-right-radius:15px;
        border-top-right-radius:5px;
        border-bottom-left-radius:5px;
        background-color:var(--background-primary-cl);
        display:flex;
        align-items:center;
        justify-content:center;
        color: #FFF;
        font-family: David Libre;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px; /* 145% */
        cursor:pointer;
    }
    .info_div{
        display:flex;
        align-items:center;
        gap :25px;
        text-decoration:none;
        position:relative;
    }
    .icon{
        font-size:30px;
        color:#219ebc;
        cursor:pointer;
    }
    .profile{
        color:#1d3557;
    }
    .profile_modal{
    width:200px;
    height:200px;
    background-color:#fff;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    position:absolute;
    top:50px;
    left:10px;
    /* border:1px solid; */
    padding: 15px 0;
    padding-top:25px;
    background-color:#6096ba;
    gap:20px;
   }
   .pointer{
    width:30px;
    height:30px;
    /* border:1px solid; */
    position:absolute;
    top:-10px;
    left:45px;
    transform:rotate(45deg);
    background-color:inherit;

   }
   .options{
    width:100%;
    height:40px;
    gap:20px;
    padding-left:15px;
    color:#fff;
    font-size:var(--fs-sm);
    font-weight:500;
    font-family:Inter;
   }
   .options:hover{
    background-color:#118ab2;
    cursor:pointer;
    &::before{
        content:"";
        position:absolute;
        left:0;
        width:4px;
        height:40px;
        background-color:#fff;
        color:#000
    }
   }
   .option::before{
    
   }
   .modal_icon{
    font-size:30px;
    color:#fff;
   }
   .modal_header{
    font-size:var(--fs-sc);
    text-align:center;
    font-weight:700;
    color:var(--warning);
   }
   .confirm{
    width:150px;
    height:50px;
    border-radius:8px;
    background-color:var(--background-primary-cl);
    font-size:var(--fs-sm);
    font-weight:500;
    color: #fff;
    cursor: pointer;
   }
   .cancel{
    width:150px;
    height:50px;
    border-radius:8px;
    background-color:var(--success);
    font-size:var(--fs-sm);
    font-weight:500;
    color: #fff;
    cursor: pointer;
    margin-top:10px;
   }
   .nav_icon{
    position:absolute;
    right:100px;
    top:35%;
    font-size:30px;
    display:none;
    cursor: pointer;
   }
   .info_div_col{
    width:100%;
    padding:0 10px;
    text-decoration:none;
   }
   @media(max-width:1200px) {
        padding:30px 30px;
        padding-right:80px;
        .book_bnt{
            display:none;
        }
   }
   @media(max-width:900px){
    .nav{
        gap:15px;
    }
    
   }
   @media(max-width:590px){
    display:flex;
    flex-direction:column;
    padding-top:100px;
    height:${({display}) => display ? "100vh" : "fit-content"};
    justify-content:start;
    gap:20px;
    .nav{
        flex-direction:column;
        align-items:start;
        width:100%;
        display:${({display}) => display ? "flex" : "none"}
    }
    .logo{
        position:absolute;
        top:10px;
        left:20px;
    }
    .nav_icon{
        display:block;
        top:${({display}) => display ? "30px" : "18px"};
        right:${({display}) => display ? "15px" : "60px"};
    }
    .info_div{
        display:${({display}) => display ? "flex" : "none"}
    }
   }
`