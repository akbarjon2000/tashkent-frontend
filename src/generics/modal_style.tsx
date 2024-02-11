import {styled} from "styled-components"
type ModalProps = {
    width:string | undefined,
    height:string | undefined,
    backgroundColor:string | undefined,
    display:string
}
export const Container = styled.div<ModalProps>`
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,0.4);
    display:${({display}) => (display)};
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    left:0;
    z-index:3;
    .modal{
        width:${({width}) => (width? width :"400px")};
        height:${({height}) => (height? height :"300px")};
        background-color:${({backgroundColor}) => (backgroundColor? backgroundColor :"#fff")};
        border-radius:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }


`