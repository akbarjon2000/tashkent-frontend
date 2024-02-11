import React, { useEffect, useState } from 'react'
import { Container } from './languages_style'
import {FcGlobe} from "react-icons/fc"
import i18n from './i18n'
type LangProps = {
  navDisplay : boolean
}
const Languages = ({navDisplay}:LangProps) => {
    const [display, setDisplay] = useState<boolean>(false);
    const [language, setLanguage] = useState("en")
    const handleGlobe = () => {

    }
    const handleChange = (lang:string) => {
        
        setLanguage(lang)
    }
    useEffect(() => {
        i18n.changeLanguage(language)
    },[language])
  return (
    <Container display={display} navDisplay={navDisplay}>
        <FcGlobe className='globe' onClick={handleGlobe} />
        <div onClick={() => handleChange("uz")} className='center uz'>UZ</div>
        <div onClick={() => handleChange("en")}  className='center eng'>EN</div>
        <div onClick={() => handleChange("kor")}  className='center kor'>KOR</div>
    </Container>
  )
}

export default Languages