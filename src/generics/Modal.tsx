import React from 'react'
import { Container } from './modal_style'
type ModalProps = {
    width?:string | undefined,
    height:string | undefined,
    backgroundColor?:string | undefined,
    display:string,
    children:React.ReactElement | React.ReactElement[]
    style?:React.CSSProperties
}
const Modal = ({width, height, backgroundColor, children, display, style}:ModalProps) => {
  return (
    <Container width={width} height = {height} backgroundColor={backgroundColor} display={display} style={style} >
        <div className='modal'>{children}</div>
    </Container>
  )
}

export default Modal