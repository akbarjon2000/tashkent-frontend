import React from 'react'
import { Container, Home } from './landing_style'
import { Link } from 'react-router-dom'
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineInstagram} from "react-icons/ai"
import {TfiTwitter} from "react-icons/tfi"
import { useTranslation } from 'react-i18next';
const Landing = () => {
    const { t, i18n } = useTranslation();
  return (
    <Container>
        <Home>
            {/* <div className='circle1'></div>
            <div className='circle2'></div>
            <div className='circle3'></div> */}
            
            <div className='motto'>
                <div className='col1'>
                    <p className='heading'>{t("welcome")}</p>
                    <p className='child_text'>{t("child_heading")}</p>
                    <div className='btns'>
                        <Link className='menu_btn menu_link' to="/menu">{t("menu")}</Link>
                        <Link to="/table" className='book_btn2 menu_link'>{t("book")}</Link>
                    </div>
                    <div className='icons' >
                        <div className='icon'>
                            <BiLogoFacebook/>
                        </div>
                        <div className='icon'>
                            <AiOutlineInstagram/>
                        </div>
                        <div className='icon'>
                            <TfiTwitter/>
                        </div>
                    </div>
                </div>
                <div className='home_img'>
                    <img src='./chef 1.png' className='main_img' />
                    {/* <img src='./dish-2 1.png' className='sec_img' /> */}
                </div>
            </div>
        </Home>
    </Container>
  )
}

export default Landing