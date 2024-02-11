import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    padding-top:100px;

`

export const Home = styled.div`
    width:100%;
    height:100vh;
    padding:0 60px 60px 60px;
    display:flex;
    align-items:center;
    justify-content:center;
    
    .circle1{
        width:660px;
        height:660px;
        border:1px solid var(--text-primary-cl);
        border-radius:50%;
        position:absolute;
        top:-330px;
        left:-330px;
    }
  
    
    .motto{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .col1{
        display:flex;
        flex-direction:column;
        width:40%;
        min-width:400px;
    }
    .heading{
        color: var(--text-primary-cl);
        font-family: David Libre;
        font-size: 70px;
        font-style: normal;
        font-weight: 700;
        line-height: 72px; /* 102.857% */
        margin-bottom:30px;
        /* margin-top:100%; */
    }
    .child_text{
        color: #5C6574;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 181.25% */
        /* margin-top:30px; */
        max-width:500px;
    }
    .btns{
        display:flex;
        gap:25px;
        align-items:center;
        margin-top:18px;
    }
    .menu_btn{
        width: 120px;
        height: 54px;
        border-top-left-radius:15px;
        border-bottom-right-radius:15px;
        border-top-right-radius:5px;
        border-bottom-left-radius:5px;
        background-color:var(--text-primary-cl);
        
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
    }
    .menu_link{
        text-decoration:none;
        color: #FFF;
        text-align: center;
        font-family: David Libre;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px; /* 145% */
    }
    .book_btn2{
        width: 167px;
        height: 54px;
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
    .icons{
        display:flex;
        gap:17px;
        align-items:center;
        margin-top:94px;
    }
    .icon{
        width: 45px;
        height: 45px;
        border-radius:50%;
        border:1px solid var(--text-primary-cl);
        color:var(--text-primary-cl);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:25px;
        cursor:pointer;
    }
    .home_img{
        width:50%;
        max-width:500px;
        height:fit-content;
        /* max-height:200px; */
        position:relative;
    }
    .main_img{
        width:100%;

    }
    .sec_img{
        width:50%;
        max-width:300px;
        height:50%;
        max-height:300px;
        position:absolute;
        left:-50px;
        bottom:80px;
    }
    @media(max-width:1200px){
        /* .home_img{
            position:absolute;
            opacity:0.2;
        } */
        .col1{
            width:70%;
        }
        .child_text{
            width:60%;
        }

    }
    @media(max-width:900px){
        .home_img{
            display:none;
        }
        
    }
`