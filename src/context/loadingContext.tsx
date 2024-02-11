import React, { createContext, useState } from 'react'
type LoadingPropType = {
    children:React.ReactElement
}
type LoadingStateType = {
    loading: boolean,
    setLoading:React.Dispatch<React.SetStateAction<boolean>>
}
export const LoadingContext = createContext({} as LoadingStateType);

const LoadingContextProvider = ({children}:LoadingPropType) => {
    const [loading, setLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{loading, setLoading}}>{children}</LoadingContext.Provider>
  )
}

export default LoadingContextProvider