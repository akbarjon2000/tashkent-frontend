import React, { createContext, useState } from 'react'
type ContextType = {
    _id:string,
    name:string,
    image:string,
    description_uz:string,
    description_kor:string,
    description_eng:string,
    menu_id:number 
}
type DishContextProps = {
    children:React.ReactElement
}
type ItemType = {
    item: ContextType | null,
    setItem:React.Dispatch<React.SetStateAction<ContextType | null>>
}
export const DishContext = createContext({} as ItemType);
const DishContextProvider = ({children}:DishContextProps) => {
    const [item, setItem] = useState<ContextType|null>(null)
  return (
    <DishContext.Provider value={{item, setItem}} >{children}</DishContext.Provider>
  )
}

export default DishContextProvider