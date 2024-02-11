import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { Container } from './profile_style'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { LoadingContext } from '../../context/loadingContext'
import Modal from '../../generics/Modal'
import { useTranslation } from 'react-i18next'
type ProfileProps = {
    first_name: string,
    last_name:string,
    number:number,
    email:string,
    password:string | null
}
const Profile = () => {
    const [profile, setProfile] = useState({} as ProfileProps);
    const [message, setMessage] = useState<string>("Successfully Updated")
    const [display, setDisplay] = useState<string>("none");
    const {setLoading} = useContext(LoadingContext);
    const { t, i18n } = useTranslation();

    const getProfile = async () => {
        try {
            const decode = localStorage.getItem("auth");
            console.log(decode)
            const res = await axios.post("https://tashkent-server-3.onrender.com/get-profile",{decode});
            console.log(res)
            setProfile(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (e:any) => {
        let name = e.target.name;
        let value = e.target.value;
        setProfile(prev => ({...prev, [name]:value}));
    }
    const handleUpdate = async () => {
        try {
                console.log("clicked")
                setLoading(true);
                const res = await axios.put("https://tashkent-server-3.onrender.com/update-profile", {profile});
                setLoading(false);
                setMessage("Successfully Updated!")
                setDisplay("flex")
        } catch (error) {
            console.log(error)
            setLoading(false);
            setMessage("Password or Email is wrong!")
            setDisplay("flex")
        }
    }
    const handleConfirm = () => {
        setDisplay("none");
        setProfile(prev => ({...prev, password:""}))
    }
    useEffect(() => {
        getProfile();
    }, [])
  return (
    <Container>
        <Modal height='250px' width='400px' backgroundColor='white' display={display}>
            <p className='header'>{message}</p>
            <div onClick={handleConfirm} className='center confirm'>Confirm</div>
        </Modal>
        <div className='center input_row'>
            <div className='data_div'>
                <p>{t("First Name")}</p>
                <input className='data_input' name='first_name' value={profile.first_name} onChange={handleChange} />
            </div>
            <div className='data_div'>
                <p>{t("Last Name")}</p>
                <input className='data_input' name='last_name' value={profile.last_name} onChange={handleChange} />
            </div>
        </div>
        <div className='input_row'>
            <p>{t("Phone Number")}</p>
            <input className='data_input' name='number' value={profile.number} onChange={handleChange} />
        </div>
        <div className='input_row'>
            <p>{t("Email")}</p>
            <input className='data_input' name='email' value={profile.email} onChange={handleChange} />
        </div>
        <div className='input_row'>
            <p>{t("Password")}</p>
            <input type='password' style={{marginBottom:"20px"}} className='data_input' name='password' value={profile.password || ""} onChange={handleChange} />
            {/* <Link  to="/forgot-password">Forgot password?</Link> */}
            <div className=' center update_btn' onClick={handleUpdate}>{t("Update Profile")}</div>
        </div>
    </Container>
  )
}

export default Profile