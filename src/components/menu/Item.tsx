import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import axios from 'axios'
type ItemProps = {
    item:{
    _id:string,
    image:string,
    price:number,
    name:string,
    description_uz:string,
    description_kor:string,
    description_eng:string,
    },
    onClick: React.MouseEvent<HTMLElement>

  
}
const Item = ({item, onClick} : any) => {
    const { t, i18n } = useTranslation();
    const [like, setLike] = useState(item.liked);
    const handleLike = async (e:React.MouseEvent) => {
        e.stopPropagation();
        setLike(!like);
        let token = localStorage.getItem("auth");
        try {
            let res = await axios.post("https://tashkent-server-3.onrender.com/like", {token, _id:item._id})
        } catch (error) {
            
        }
    }
    const removeLike = async (e: React.MouseEvent) => {
        e.stopPropagation();
        setLike(!like);
        let token = localStorage.getItem("auth");
        try {
            let res = axios.delete("https://tashkent-server-3.onrender.com/dislike", {data:{token, id:item._id}})
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div  key={item._id} className='card' onClick={onClick}>
        <div className='image_div'>
            <img src={item.image} className='dish_img'/>
            <div className='price'>{item.price} <br/> ₩</div>
            {like ?
            <AiFillHeart className='like' style={{color:"var(--danger)"}} onClick={(e:React.MouseEvent) => removeLike(e)} />
            :
            <AiOutlineHeart className='like' style={{color:"#fff"}} onClick={(e:React.MouseEvent) => handleLike(e)} />
            }
        </div>
        <p className='dish_name'>{item.name}</p>
        <p className='desc'>{item[`${t("description")}`]}</p>
    </div>
  )
}

export default Item