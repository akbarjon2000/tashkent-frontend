import {styled} from "styled-components"

export const Container = styled.div`
    
    padding-top:150px;
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
 
    .input_row{
        margin:0 auto;
        width:60%;
        justify-content:space-between;

    }
    .data_div{
        width:47%;

    }
    .data_input{
        width:100%;
        height:40px;
        padding-left:10px;

    }

    .update_btn{
        width:200px;
        height:50px;
        background-color:var(--background-primary-cl);
        border-radius:5px;
        color:white;
        font-family:Inter;
        font-weight:500;
        margin-top:20px;
        cursor:pointer;
    }
   .header{
    color:green;
    font-size:var(--fs-sc);
    font-weight:500;
    font-family:Inter;
   }
   .confirm{
    width:150px;
    height:50px;
    background-color:var(--background-primary-cl);
    font-size:var(--fs-sm);
    border-radius:8px;
    font-weight:500;
    font-family:Inter;
    margin-top:40px;
    color:#fff;
    cursor: pointer;

   }

  
`