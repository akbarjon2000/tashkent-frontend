import React, { useEffect, useState } from 'react'
import { Container } from './wishlist_style'
import { FcLike } from 'react-icons/fc'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
type WishlistType = {
    image:string,
    name:string,
    description_uz:string,
    description_kor:string,
    description_eng:string,
    price:number,
    _id:string
}[]
const Wishlist = () => {
    const [wishlist, setWishlist] = useState<WishlistType | null>(null)
    const { t, i18n } = useTranslation();
    const handleFetch = async () => {
        let token = localStorage.getItem("auth");
        try {
            let res = await axios.post("https://tashkent-server-3.onrender.com/get-likes", {token})
            console.log(res);
            setWishlist(res.data)
        } catch (error) {
            
        }
    }

    const handleDelete = async (_id:string) => {
        let token = localStorage.getItem("auth");
        try {
            let result = await axios.delete("https://tashkent-server-3.onrender.com/dislike", {data:{token, id:_id}});
            console.log(result)
            handleFetch()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleFetch()
    }, [])
  return (
    <Container>
        <h1 >My Wishlist <FcLike /></h1>

        <table>
            <tr className='head_row'>
                <th>{t("Product")}</th>
                <th>{t("Name")}</th>
                <th>{t("unit_price")}</th>
                <th>{t("Action")}</th>
            </tr>
            {wishlist?.length?wishlist.map(item => (
                <tr className='item_row' key={item._id}>
                    <td><img src={item?.image} className='img'/></td>
                    <td>{item?.name}</td>
                    <td>{item?.price}₩</td>
                    <td><div className='delete' onClick={() => handleDelete(item._id)}>{t("Delete")}</div></td>
                </tr>
            )) :<tr><td colSpan={6}><h3 style={{textAlign:"center", width:"100%"}}>{("no_data")}</h3></td></tr> }
        </table>
    </Container>
  )
}

export default Wishlist