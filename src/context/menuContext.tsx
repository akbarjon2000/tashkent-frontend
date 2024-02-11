import { createContext, useEffect, useState } from "react";
import { ThemeProps } from "./menu.types";
import axios from "axios";
type Menu = {
    _id:string,
    name:string,
    description_eng:string,
    description_kor:string,
    description_euz:string,
    price:number,
    image:string,
    menu_id:number
}[]
type MenuContextType = {
    menu:Menu|null,
    setMenu:React.Dispatch<React.SetStateAction<Menu | null>>,
    GetMenu:() => Promise<void>
}
export const MenuContext = createContext({} as MenuContextType);

const MenuConextProvider = ({children}: ThemeProps) => {
    const token = localStorage.getItem("auth")
    const GetMenu =async () => {
        let res = await axios.post("https://tashkent-server-3.onrender.com/menu", {token});
        console.log(res);
        setMenu(res.data);
    }

    // if(window.location.pathname == "/menu"){
    //     GetMenu();
    // }
    useEffect(() => {
        GetMenu();
    }, [])
    const [menu, setMenu] = useState<Menu|null>(null)
    return(
        <MenuContext.Provider value={{menu,setMenu,GetMenu}}>{children}</MenuContext.Provider>
    )
}

export default MenuConextProvider