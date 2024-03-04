import React, { ReactEventHandler, createRef, useState } from 'react'
import { Container } from './admin_style';
import {nanoid} from "nanoid"
import axios from 'axios';
type FormType = {
    meal_name: string,
    description_eng:string,
    description_uz:string,
    description_kor:string,
    image:string,
    price:number,
    menu_id:number

}
const Admin = () => {
    const initial_state = {
        meal_name: "",
        description_eng:"",
        description_uz:"",
        description_kor:"",
        image:"",
        price:0,
        menu_id:1
    }
    const [menu, setMenu] = useState<FormType>(initial_state)

    const menu_form = createRef<HTMLFormElement>();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        let image_id = nanoid(7);
        let inputFile = e.target[5];
        console.log(e)
        try {
            if(inputFile.files.length){
                let file = inputFile.files[0];
        
                let blob = file.slice(0, file.size, "image/jpeg");
                let newFile = new File([blob], `${image_id}_post.jpeg`, {type:"image/jpeg/jpg/png"});
                let formData = new FormData();
                formData.append("imgfile", newFile);
                let res = await axios.post("https://tashkent-server-3.onrender.com/upload-image", formData);
                setMenu((prev:any) => ({...prev, image:res.data}));
                let set_menu = await axios.post("https://tashkent-server-3.onrender.com/add-menu", menu)
                setMenu(initial_state);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e:any) => {
        try {
             console.log(e)
        setMenu((prev:any) => ({...prev, [e.target.name]:e.target.value}));
        
        } catch (error) {
            console.log(error)
        }
       console.log(menu)
    }
  return (
    <Container>
        <h1>My Restaurant</h1>
        <form onSubmit={handleSubmit} ref={menu_form}>
            <select  name='menu_id' onChange={handleChange}>
                <option value={1}>Main</option>
                <option value={2}>Drinks</option>
                <option value={3}>Salads</option>
                <option value={4}>Desserts</option>
            </select>
            <input type='text' name='meal_name' onChange={(e) => handleChange(e)} value={menu.meal_name}  placeholder='name' required/>
            <input type='text' onChange={(e) => handleChange(e)} name='description_eng' placeholder='Description in Englidh' value={menu?.description_eng} />
            <input type='text' onChange={(e) => handleChange(e)} name='description_uz' placeholder='Description in Uzbek' value={menu?.description_uz} />
            <input type='text' onChange={(e) => handleChange(e)} name='description_kor' placeholder='Description in Korean' value={menu?.description_kor} />
            <input name='image' type='file' required/>
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)} placeholder='price (numbers only)' name='price' type='number' value={menu?.price} />

            <button type='submit'>Submit</button>
        </form>
    </Container>
  )
}

export default Admin