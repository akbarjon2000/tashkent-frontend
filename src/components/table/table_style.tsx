import {styled} from "styled-components"

export const Container = styled.div`
    
    width:100%;
    height:100vh;
    padding-top:150px;
    padding-bottom:40px;
    h1{
        font-family:var(--main-font);
        font-size:var(--fs-sc);
        text-align:center;
        margin-bottom:40px;
    }
    .page{
        margin:0 auto;
        width:300px;
        height:50px;
        margin-bottom:50px;
    }
    .info_div{
        min-height:450px;
        justify-content:start;
    }
    .text{
        font-size:var(--fs-sm);
        font-family:var(--sec-font);
        
    }
    .num{
        width:50px;
        height:50px;
        border-radius:5px;
        cursor:pointer;
        background-color:#367ba5;
        color:#fff;
        font-weight:700;
        font-family: var(--sec-font);

    }
    .radio{
        display:none;
    }

    .date_box{
        
    }
    .date_icon{
        font-size:50px;
        cursor:pointer;
        color:#367ba5;
    }
    .calendar{
        /* visibility:hidden; */
        width:50px;
        height:50px;
        border:none;
        text-align:center;
        font-weight:700;
        font-family: var(--sec-font);
        /* padding:5px; */
        outline: none;
    }
    ::-webkit-datetime-edit-month-field { display:none; };
    ::-webkit-datetime-edit-year-field { display:none; };
    ::-webkit-datetime-edit-day-field { display:none; };
    .calendar::-webkit-calendar-picker-indicator {
  /* display:none; */
}
::-webkit-datetime-edit-text {
  display:none;
}
::-webkit-calendar-picker-indicator {
  width:50px;
  height:50px;
  color:#fff;
  cursor:pointer;
}
.time{
    width:70%;
    max-width:300px;
    height:50px;
    border-radius:8px;
    border:1px solid;
    padding:10px;
    font-size:var(--fs-sm);
    padding-left:20px;
}
.time::-webkit-calendar-picker-indicator{
    height:30px;
    width:30px;
}
.submit{
    width:60%;
    max-width:200px;
    /* margin:0 auto; */
    height:50px;
    border:1px solid;
    margin-top: 30px;
    border-radius:10px;
    color:#fff;
    background-color:var(--background-primary-cl);
    font-weight:500;
    cursor:pointer;
    margin:0 auto;
}
.seat_div{
    width:50%;
    min-width:500px;
    justify-content:start;
    gap:20px;
    min-height:500px;
}
.seat_row{
    width:60%;
    max-width:300px;
    height: 50px;
}
.ordinary{
    width:50%;
    height:100%;
    border:1px solid;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
    color:#fff;
    background-color:#367ba5;
    font-weight:500;
    cursor: pointer;
}
.premium{
    width:50%;
    height:100%;
    border:1px solid;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    color:#fff;
    background-color:#367ba5;
    font-weight:500;
    cursor: pointer;
}
.table_img{
    width:80%;
    min-width:450px;
    max-width:500px;
    max-height:400px;
    height:450px;
}
.modal_con{
    align-items:center;
    justify-content:space-between;
    padding:20px;
}
.message{
    font-size: var(--fs-sc);
    font-weight: 700;
    text-align:center;
    margin-top:0;
}
.confirm{
    width:150px;
    height:50px;
    background-color:var(--background-primary-cl);
    border-radius:15px;
    color:#fff;
    cursor: pointer;
}
table{
        width:100%;
        max-width:1000px;
        border-collapse:collapse;
        margin-top:30px;
        margin:0 auto;
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