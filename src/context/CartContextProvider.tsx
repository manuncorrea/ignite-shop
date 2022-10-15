import { createContext, ReactNode } from "react"

interface ItemsProps {
  id: string
  name: string
  price: string
  description: string
  imageUrl: string
  defaultPriceId: string
  quantity?: number
}

interface CartProps {
  cart: ItemsProps[]
}

interface CartContextProviderProps {
  children: ReactNode
}


export const CartContext = createContext({} as CartProps)


export function CartContextProvider({ children }: CartContextProviderProps) {
  return (
    <CartContext.Provider value={{cart: [],}}>
      {children}
    </CartContext.Provider>
  )
}
