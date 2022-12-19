import { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [layers, setLayers] = useState(5)
  const [time, setTime] = useState(1)

  const value = {
    layers,
    setLayers,
    time,
    setTime
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

const expDefault = {
  Provider,
  Consumer: Context.Consumer,
}

export default expDefault
