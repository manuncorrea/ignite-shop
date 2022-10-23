import { createContext, ReactNode, useEffect, useReducer } from "react"

interface ProductProps {
  id: string
  name: string
  price: string
  description: string
  imageUrl: string
  defaultPriceId: string
  quantity?: number
}

interface CartProps {
  cart: ProductProps[]
  total: number,
  addCart: (product: ProductProps) => void
}

interface CartContextProviderProps {
  children: ReactNode
}


export const CartContext = createContext({} as CartProps)


export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case 'SET_RECOVERED_VALUE': {
          return action.payload.cart;
        }

        case 'ADD_TO_CART': {
          const { cart } = state;

          const newCart = [...cart, action.payload.product];

          return {
            cart: newCart,
            total: newCart.length * 50,
          };
        }

        case 'REMOVE_FROM_CART': {
          const { cart } = state;

          const newCart = cart.filter((product: ProductProps) => {
            return product.id !== action.payload.id;
          });

          return {
            cart: newCart,
            total: newCart.length * 50,
          };
        }

        default:
          return state;
      }
    },
    {
      cart: [],
      total: 0,
    },
  );

  useEffect(() => {
    const stateJson = localStorage.getItem('@ignite-shop-v1.0')

    if(stateJson) {
      dispatch({
        type: 'SET_RECOVERED_VALUE',
        payload: {
          cart: JSON.parse(stateJson)
        }
      })
    }
     
  }, [])


  const { cart, total } = cartState;

  function addCart(product: ProductProps) {
   const {id} = product;

   const productInCart = cart.filter((product: ProductProps) => {
    return product.id === id;
   })

   if(productInCart.length > 0) {
    cart.push(productInCart[0])
   }
   dispatch({
    type: 'ADD_CART',
    payload: {
      product: product,
    }
   })

  }
  return (
    <CartContext.Provider value={{cart, addCart, total }}>
      {children}
    </CartContext.Provider>
  )
}
