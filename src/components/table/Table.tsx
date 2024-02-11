import React, { createRef, useEffect, useRef, useState } from 'react'
import { Container } from './table_style';
import {BsFillCalendarEventFill} from "react-icons/bs"
import axios from 'axios';
import Modal from '../../generics/Modal';
import { useTranslation } from 'react-i18next';
type TableType= {
    _id:string,
    count:number,
    date:number,
    time:string,
    type:"ordinary" | "premium",
    client_id:string
}
type TableList = TableType[]
// type days = number
const Table = () => {
    const [table, setTable] = useState({count:1, date:new Date().valueOf(), type:"ordinary", time:""} as TableType);
    const [days, setDays] = useState<number[]>([]);
    const [date, setDate] = useState(new Date(new Date().setDate(new Date().getDate() + 15)).toISOString().split('T')[0]);
    const [message, setMessage] = useState<boolean>(true);
    const [display, setDisplay] = useState<string>("none")
    const [page, setPage]= useState(true)
    const [tableList, setTableList] = useState<TableList | null>(null)

    const { t, i18n } = useTranslation();

    console.log(date)
    const months:any = {
        1:"January",
        2:"February",
        3:"March",
        4:"April",
        5:"May",
        6:"June",
        7:"July",
        8:"August",
        9:"September",
        10:"October",
        11:"November",
        12:"December"
    }
    const [thisMonth, setThisMonth] = useState(months[new Date().getMonth() + 1])
  
    const day = new Date().getDate();
    const handleMonth = (value:number) => {
        setThisMonth(months[new Date(value).getMonth() + 1])
    }
    console.log(day)
    const dateRef = useRef<HTMLInputElement>(null!)
    const handleNum = (e:any) => {
        setTable(prev => ({...prev, count : e.target.value}))
    }
    
    const SubmitTable = async (e:any) => {
        e.preventDefault();
        try {
            let token = localStorage.getItem("auth");
            let res = await axios.post("https://tashkent-server-3.onrender.com/book-table", {table, token})
            setMessage(true);
            setDisplay("flex");
            setTable(prev => ({...prev,count:1, date:new Date().valueOf(), type:"ordinary", time:""}))
        
        } catch (error) {
            console.log(error);
            setMessage(false);
            setDisplay("flex");
            setTable(prev => ({...prev,count:1, date:new Date().valueOf(), type:"ordinary", time:""}))
        }
    }
    const FetchTable = async () => {
        try {
            let token = localStorage.getItem("auth");
            const res = await axios.post("https://tashkent-server-3.onrender.com/get-tables", {token});
            console.log(res)
            setTableList(res.data);

        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (client_id:string, _id:string) => {
        try {
            let res = await axios.delete("https://tashkent-server-3.onrender.com/delete-table", {data:{client_id, _id}});
            FetchTable();
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        let temp = [];
        for(let i=0; i < 5; i++){
            temp.push(new Date().setDate(day + i));
        }
        setDays(temp);
        FetchTable();
    }, [])
  return (
    <Container >
        <h1>{t("table_header")}</h1>
        <div className='row page'>
                    <div style={{backgroundColor:`${page ? "var(--background-primary-cl)" : "#367ba5"}`}} onClick={() => setPage(true)} className='text center ordinary'>{t("Order")}</div>
                    <div style={{backgroundColor:`${!page ? "var(--background-primary-cl)" : "#367ba5"}`}} onClick={() => setPage(false)} className='text center premium'>{t("List")}</div>
                </div>
        {
            page?
        <>
        <div className='row center' style={{flexWrap:"wrap"}}>
            <form className='col info_div' id='table_form' onSubmit={SubmitTable}>
                <p className='text' style={{marginTop:"0"}}>{t("number")}: {table.count}</p>
                <div className='row' style={{gap:"20px"}}>
                    <label style={{backgroundColor:`${table.count == 1 ? "var(--background-primary-cl)" : "#367ba5"}`}} className='center num' htmlFor='1'>1</label>
                    <input  value={1} onChange={handleNum} className='radio' type='radio' id='1' name='people' />
                    
                    <label style={{backgroundColor:`${table.count == 2 ? "var(--background-primary-cl)" : "#367ba5"}`}} className='center num' htmlFor='2'>2</label>
                    <input value={2} onChange={handleNum} className='radio' type='radio' id='2' name='people' />
                    
                    <label style={{backgroundColor:`${table.count == 3 ? "var(--background-primary-cl)" : "#367ba5"}`}} className='center num' htmlFor='3'>3</label>
                    <input value={3} onChange={handleNum} className='radio' type='radio' id='3' name='people' />
                    
                    <label style={{backgroundColor:`${table.count == 4 ? "var(--background-primary-cl)" : "#367ba5"}`}} className='center num' htmlFor='4'>4</label>
                    <input value={4} onChange={handleNum} className='radio' type='radio' id='4' name='people' />
                    
                    <label style={{backgroundColor:`${table.count == 5 ? "var(--background-primary-cl)" : "#367ba5"}`}} className='center num' htmlFor='5'>5</label>
                    <input value={5} onChange={handleNum} className='radio' type='radio' id='5' name='people' />
                    
                    <label style={{backgroundColor:`${table.count == 6 ? "var(--background-primary-cl)" : "#367ba5"}`}} className='center num' htmlFor='6'>6</label>
                    <input value={6} onChange={handleNum} className='radio' type='radio' id='6' name='people' />
                </div>
                <div>
                    <p className='text'>{t("DATE")} ({thisMonth}): {new Date(table.date).getDate()}</p>
                    <div className='row' style={{gap:"20px"}}>
                        {days.map(day => (
                            <div key={day}>
                            <label style={{backgroundColor:`${table.date == day ? "var(--background-primary-cl)" : "#367ba5"}`}} className='center num date_box' htmlFor={`${day}`}>{new Date(day).getDate()}</label>
                            <input onChange={() => {setTable(prev => ({...prev, date:day})); handleMonth(day) }} value={day}  className='radio' type='radio' id={`${day}`} name='date'/>
                            </div>
                        ))}
                        <input onChange={(e) => {setTable(prev => ({...prev, date:e.target.valueAsNumber})); handleMonth(e.target.valueAsNumber)}} ref={dateRef} id='calendar'  type='date' className='center calendar' min={new Date().toISOString().split('T')[0]} max = {date} />
                    </div>
                </div>
                <div className='time_div'>
                    <p className='text'>{t("TIME")}:</p>
                    <input onChange={(e) => {setTable(prev => ({...prev, time:e.target.value})); console.log(e.target.value)}} type="time" className='time' required />
                </div>
            </form>
            <div className='center col seat_div'>
                <div className='row seat_row'>
                    <div style={{backgroundColor:`${table.type == "ordinary" ? "var(--background-primary-cl)" : "#367ba5"}`}} onClick={() => setTable(prev => ({...prev, type:"ordinary"}))} className='text center ordinary'>{t("Ordinary")}</div>
                    <div style={{backgroundColor:`${table.type == "premium" ? "var(--background-primary-cl)" : "#367ba5"}`}} onClick={() => setTable(prev => ({...prev, type:"premium"}))} className='text center premium'>{t("Premium")}</div>
                </div>
                {table.type == "ordinary" ? 
                    <img src='./table2.jpeg' className='table_img' />
                :
                    <img src='./premium_table.png' className='table_img' />
                }
            </div>
        </div>
        <input type="submit" form='table_form' className='center submit text' value="Submit" />
        <Modal display={display} height='220px' width="350px" >
            <div className='col modal_con'>
                {
                    message?
                    <p style={{color:"var(--success)"}} className='message'>{t("table_success")}</p>
                    :
                    <p style={{color:"var(--danger)"}} className='message'>{t("table_error")}</p>
                }
                <div className='center text confirm' onClick={() => setDisplay("none")}>{t("Confirm")}</div>
            </div>
        </Modal>
        </>
        :
        <table>
            <tr className='head_row'>
                <th>{t("Type")}</th>
                <th>{t("Count")}</th>
                <th>{t("Date")}</th>
                <th>{t("Time")}</th>
                <th>{t("unit_price")}</th>
                {/* <th>{t("Total")}</th> */}
                <th>{t("Action")}</th>
            </tr>
            {tableList?.length?tableList.map((item) => (
                <tr className='item_row' key={item._id}>
                    <td>{item.type}</td>
                    <td>{item.count}</td>
                    <td>{new Date(item.date).toDateString()}</td>
                    <td>{item.time}</td>
                    <td>{item?.type == "premium" ? 10000 : 0}₩</td>
                    <td><div className='delete' onClick={() => handleDelete(item.client_id, item._id)}>{t("Delete")}</div></td>
                </tr>
            ))
        :null}
            {/* {cart?.length?cart.map(item => (
                <tr className='item_row' key={item._id}>
                    <td><img src={item?.item.image} className='img'/></td>
                    <td>{item?.item.name}</td>
                    <td>{item?.item.price}₩</td>
                    <td>{item?.count}</td>
                    <td>{item?.count * item?.item.price}₩</td>
                    <td><div ref={del} className='delete' onClick={() => handleDelete(item.client_id, item._id)}>{t("Delete")}</div></td>
                </tr>
            )) :<tr><td colSpan={6}><h3 style={{textAlign:"center", width:"100%"}}>{("no_data")}</h3></td></tr> } */}
        </table>
    }
    </Container>
  )
}

export default Table