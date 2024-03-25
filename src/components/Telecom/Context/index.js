import React from "react"
import useTelecom from "../useTelecom"

const TelecomContext = React.createContext()

export const TelecomContextProvider = ({children}) => {
  const customer = useTelecom()
  return <TelecomContext.Provider value={customer}>{children}</TelecomContext.Provider>
}

export const useTelecomContext = () => React.useContext(TelecomContext);
