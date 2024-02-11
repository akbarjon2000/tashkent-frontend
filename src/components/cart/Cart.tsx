import React, { createRef, useEffect, useState, useRef, useContext } from 'react'
import { Container } from './cart_style'
import {BsFillCartCheckFill} from "react-icons/bs"
import axios from 'axios'
import Modal from '../../generics/Modal'
import { Link } from 'react-router-dom'
import { LoadingContext } from '../../context/loadingContext'
import { useTranslation } from 'react-i18next'
type GetCartType = {
    client_id:string,
    _id:any,
    item:{
        name:string,
        _id:string,
        image:string,
        price:number
    },
    count:number
}[]
type OrderListType = {
    client_id:number,
    items:{
        _id:string,
        count:number
    }[]
}
type TempArr = {
    _id:string,
    count:number
}[]
type Table = {
    _id:string,
    count:number,
    date:number,
    time:string,
    type:string,
    client_id:string
}[]
const Cart = () => {
    const [order, setOrder] = useState<OrderListType>({client_id:1, items:[]})
    const[total, setTotal] = useState<number>(0);
    const [cart, setCart] = useState<GetCartType | null>(null);
    const [table, setTable] = useState<Table | null>(null)
    const [display, setDisplay] = useState<string>("none")
    const {loading, setLoading} = useContext(LoadingContext);
    const { t, i18n } = useTranslation();
    
    const del = useRef<HTMLDivElement>(null!);


    const FetchCart = async  () => {
        let token = localStorage.getItem("auth");
        const res = await axios.post<GetCartType>("https://tashkent-server-3.onrender.com/cart", {token});
        console.log(res)
        setCart(res.data);
        let temp = 0;
        let tempArr : TempArr = [];
        
        res.data?.map(item => {
            tempArr.push({count:item.count, _id:item.item._id})
            temp += item.count * item.item.price;
        })
        setOrder(prev => ({...prev, items:tempArr}))
        setTotal(temp);
        console.log(res);
    }
    const handleDelete = async (client_id:string, _id:string) => {
        try{
            setLoading(true);
            await axios.delete("https://tashkent-server-3.onrender.com/delete-cart-item", {data:{client_id, _id}});
            FetchCart()
            setLoading(false)
        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    const handleCheckout = async () => {
        try {
            if(order.items.length>0){
                let token = localStorage.getItem("auth");
                setLoading(true);
                await axios.delete("http://localhost:3001/delete-all-cart-items", {data:{token, order}});
                setLoading(false);
                setDisplay("flex");
                setOrder(prev => ({...prev, items:[]}))
            }
        } catch (error) {
            console.log("CHECKOUT ERROR:", error)
            setLoading(false)
        }
    }
    useEffect(() => {
        FetchCart();
    }, [])
  return (
    <Container>
        <div className='head_div'>
            <p className='heading'>{t("cart_header")}</p>
            <img src='./cart.gif' className='cart_icon' />
        </div>
        <table>
            <tr className='head_row'>
                <th>{t("Product")}</th>
                <th>{t("Name")}</th>
                <th>{t("unit_price")}</th>
                <th>{t("Count")}</th>
                <th>{t("Total")}</th>
                <th>{t("Action")}</th>
            </tr>
            {/* {table?.length?table.map((item) => (
                <tr className='item_row' key={item._id}>
                    <td><img className='img'/></td>
                    <td>{item?.type} table</td>
                    <td>{item?.type == "premium" ? 10000 : 0}₩</td>
                    <td>{item?.count}</td>
                    <td>{item?.type == "premium" ? 10000 : 0}₩</td>
                    <td><div ref={del} className='delete' onClick={() => handleDelete(item.client_id, item._id)}>{t("Delete")}</div></td>
                </tr>
            ))
        :null} */}
            {cart?.length?cart.map(item => (
                <tr className='item_row' key={item._id}>
                    <td><img src={item?.item.image} className='img'/></td>
                    <td>{item?.item.name}</td>
                    <td>{item?.item.price}₩</td>
                    <td>{item?.count}</td>
                    <td>{item?.count * item?.item.price}₩</td>
                    <td><div ref={del} className='delete' onClick={() => handleDelete(item.client_id, item._id)}>{t("Delete")}</div></td>
                </tr>
            )) :<tr><td colSpan={6}><h3 style={{textAlign:"center", width:"100%"}}>{("no_data")}</h3></td></tr> }
        </table>
        <div className='checkout'>
            <p className='total'>{t("Subtotal")}: <span>{total}₩</span></p>
            <div className=' center check_btn' onClick={handleCheckout}>{t("Checkout")}</div>  
        </div>
        <Modal width='400px' height="200px" backgroundColor='var(--background-color)' display = {display}>
            <p className='confirm_text'>{("order_submitted")}</p>
            <Link to="/menu" className='center confirm_btn'>{("return_menu")}</Link>
        </Modal>
    </Container>
  )
}

export default Cart