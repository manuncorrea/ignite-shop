import { createContext, ReactNode, useState } from "react"

export interface ProductProps {
  id: string
  name: string
  price: string
  description: string
  imageUrl: string
  defaultPriceId: string
  quantity: number
}

interface CartProps {
  cart: ProductProps[];
  cartTotal: number;
  addProductCart: (product: ProductProps) => void;
  romeverProductCart: (productId: string) => void;
  buyProduct:  (productId: string) => boolean;
}

interface CartContextProviderProps {
  children: ReactNode
}


export const CartContext = createContext({} as CartProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>([]);

  const cartTotal = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  function addProductCart(product: ProductProps) {
    setCart((state) => [...state, product])
  }

  function romeverProductCart(productId: string) {
    setCart((state) => state.filter((item) => item.id !== productId))
  }

  function buyProduct(productId: string) {
    return cart.some((product) => product.id === productId)
  }


  return (
    <CartContext.Provider value={{
      cart, 
      addProductCart, 
      romeverProductCart, 
      cartTotal, 
      buyProduct
     }}>
      {children}
    </CartContext.Provider>
  )
}
