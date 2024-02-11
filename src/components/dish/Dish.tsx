import React, { useContext, useEffect, useRef, useState } from 'react'
import { Container } from './dish_style'
import { DishContext } from '../../context/dish_context'
import axios from 'axios'
import { LoadingContext } from '../../context/loadingContext'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type DishProps = {
    _id:string,
    name:string,
    image:string,
    description_uz:string,
    description_kor:string,
    description_eng:string,
    menu_id:number
}
// type AddItem = {
//     _id:string,
//     name:string,
//     image:string,
// }

const Dish = () => {
    const {item} = useContext<any>(DishContext)
    const [dish, setDish] = useState<any>(null);
    const [count, setCount] = useState<number>(1);
    const {setLoading} = useContext(LoadingContext);
    const { t, i18n } = useTranslation();
    const Modal = useRef<HTMLInputElement>(null!)
    const getDish = async () => {
        try {
            console.log(item)
            let res = await axios.post("https://tashkent-server-3.onrender.com/get-dish", {dish_id:item});;
            setDish(res.data)
        } catch (error) {
            
        }
    }
    const handleAdd = async (_item:DishProps | null, count:number) => {
        try{
            setLoading(true);
            let token = localStorage.getItem("auth");
            await axios.post("https://tashkent-server-3.onrender.com/add", {_item, count, token})
            .then(() => {
                setLoading(false);
                Modal.current.style.display = "flex";
            })
        }catch(err){
            setLoading(false);
            console.log("Unable to add to CART:", err);
        }
    }
    useEffect(() => {
        getDish()
    }, [])
  return (
    <Container>
        <div className='col1' >
            <div className='modal_div' ref={Modal}>
                <div className='modal'>
                    <p className='m_header'>{t("card_success")}</p>
                    <Link to="/menu" className='add' >{t("go_menu")}</Link>
                    <Link to="/cart" className='add table'>{t("go_cart")}</Link>
                </div>
            </div>
            <p className='name'>{dish?.name}</p>
            <p className='desc'>{dish&&dish[t("description")]} <br/>{t("close_look")}</p>
            <div className='count'>
                <div onClick={() => {count != 1 && setCount(count - 1)}} className='dec'>-</div>
                {count}
                <div onClick={() => {setCount(count + 1)}} className='dec'>+</div>
            </div>
            <hr></hr>
            <div className='btns'>
                <div className='add' onClick={() => handleAdd(dish?dish:null, count)}>{t("add_cart")}</div>
                <div className='add table'>{t("book")}</div>
            </div>
        </div>
        <img src={dish?.image} className='img' />
    </Container>
  )
}

export default Dish