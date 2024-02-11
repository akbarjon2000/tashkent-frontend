import React, { createRef, useContext, useEffect, useRef, useState } from 'react'
import { Container } from './review_style'
import {MdKeyboardArrowDown}  from "react-icons/md"
import Rater from "react-rater"
import 'react-rater/lib/react-rater.css'
import axios from 'axios'
import {nanoid} from "nanoid"
import { MenuContext } from '../../context/menuContext'
import { LoadingContext } from '../../context/loadingContext'
import {FaCircleUser} from "react-icons/fa6"
import { useNavigate } from 'react-router-dom'
import { DishContext } from '../../context/dish_context'

type ReviewsType = {
    review_details: {
        _id:string,
        dish_id:string,
        review:string,
        rating:number,
        client_id:string,
        created_at:number,
        image:string
    },
    user_info:{
        first_name:string,
        last_name:string,
    }
}[]
const Reviews = () => {
    const [profile, setProfile] = useState<any>()
    const {loading, setLoading} = useContext(LoadingContext)
    const [review, setReview] = useState<any | null>({dish_id:"651bd826808a1bd3582ff886"});
    const [reviews, setReviews] = useState<ReviewsType | null>(null);
    const {item, setItem} = useContext(DishContext)

    const s = createRef<HTMLSelectElement>();
    const {menu} = useContext(MenuContext);
    const token = localStorage.getItem("auth");
    const navigate = useNavigate();
    const baseForm = createRef<HTMLFormElement>();
    const getReviews = async () => {
        try {
            let res = await axios.get("https://tashkent-server-3.onrender.com/get-reviews/");
            setReviews(res.data);
            console.log(res.data)
        } catch (error) {
            
        }
    }
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setLoading(true);
        
        let postId = nanoid(7);
        let inputFile = e.target[2];
        
        // let date = new Date.now()
        
        if(inputFile.files.length){

        let file = inputFile.files[0];
        
        let blob = file.slice(0, file.size, "image/jpeg");
        let newFile = new File([blob], `${postId}_post.jpeg`, {type:"image/jpeg/jpg/png"});
        let formData = new FormData();
        formData.append("imgfile", newFile);
        console.log(review);
        console.log(token)
        try {
            let res = await axios.post("https://tashkent-server-3.onrender.com/upload-image", formData);
            // setReview((prev:any) => ({...prev, image:res.data}))
            let review_ = await axios.post("https://tashkent-server-3.onrender.com/upload-review", {
                image:res.data,
                ...review,
                token
            })
            console.log(review_);
            setLoading(false)
            // setReview(null);
            baseForm.current?.reset()
            setReview((prev:any) => ({...prev,review:"" }))

        } catch (error) {
            console.log(error);
            setLoading(false)

        }
        }else{
            try {
                let review_ = await axios.post("https://tashkent-server-3.onrender.com/upload-review", {
                image:"",
                ...review,
                token
            })
            console.log(review_);
            setLoading(false);
            baseForm.current?.reset();
            setReview((prev:any) => ({...prev,review:"" }))


            } catch (error) {
                console.log(error);
                setLoading(false)

            }
        }
        getReviews()
    }
    const handleOrder = (e:React.MouseEvent, item_:any) =>{
        // e.stopPropagation();
        navigate("/dish");
        console.log(item_)
        setItem(item_);
    }

    const handleReveiw = (e:any, type:string) => {
        if(type == "rating"){
            setReview((prev:any) => ({...prev, rating:e.rating}))
        }else{
            setReview((prev:any) => ({...prev, [type]:e.target.value}))
            console.log(review)
        }
    }
    useEffect(() => {
        getReviews()
    }, [])
   return (
    <Container>
        <h1 className='title'>Add Your Reviews</h1>
        <p className='secondary-text'>Thanks for visiting Tashkent. We'd love to have your feedback!</p>
        <form ref={baseForm} onSubmit={handleSubmit} className='feeback-con col'>
            <select onChange={(e:any) => handleReveiw(e, "dish_id")} ref = {s} id='item' name='item' className='input item' required>
                {menu?.map(item => ( 
                    <option  value={item._id} key={item._id}>{item.name}</option>
                ))}
            </select>
            <textarea value={review.review} onChange={(e:any) => handleReveiw(e, "review")} className='input review-text' placeholder='Add your review' required/>
            {/* <input className='input email' type='email' placeholder='Add your email 📧 📧 📧' required /> */}
            <label htmlFor="file" className='file-label'>Add a picture ✌️✌️✌️</label>
            <input   className='input file' type="file" id='file' placeholder='Add a picture'/>
            <div className='rating row'>
                <p>Leave a rating</p>
                <Rater onRate={(e) => handleReveiw(e, "rating")}/>
            </div>
            <button type='submit' className='submit'>Submit</button>
        </form>
        <div className='row review-list'>
            {reviews?.map(({user_info, review_details}) => {
                let date = new Date(review_details.created_at).toDateString()
                return (
                    <div key={review_details._id} className='col review-card'>
                        <div className='row' style={{gap:"20px"}}>
                            <FaCircleUser className="user_icon"/>
                            <h3 className='user_name'>{user_info.first_name} {user_info.last_name}</h3>
                        </div>
                        <div className='row text_img_row' style={{height:"fit-content"}}>
                            <img className="review_image" src={review_details.image} />
                            <p>{review_details.review}</p>
                        </div>
                        <div className='row' style={{justifyContent:"space-between"}}>
                            {date}
                            <div onClick={(e) => handleOrder(e,review_details.dish_id)} className='center order'>Order</div>    
                        </div>
                    </div>
                )
            })}
        </div>
    </Container>
  )
}

export default Reviews