import React from 'react'
import { Container } from './about_style'

const About = () => {
  return (
    <Container>
        <div className='center col about-text'>
            <p className='title'>ABOUT US</p>
            <p className='name'>Tashkent<br></br>Restaurant</p>
            <div className='dash'></div>
            <p className='text'>Try it out for yourself! Visit us or order meals for your home or office!</p>
        </div>
        <div className='image-div'>
            <img className='image' src='./steak.jpeg' />

        </div>
    </Container>
  )}
export default About