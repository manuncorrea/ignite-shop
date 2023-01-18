import { createContext, ReactNode, useEffect, useState } from "react"
import { parseCookies, setCookie } from "nookies";

export interface Product {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  defaultPriceId: string
}

interface CartProps {
  productInCart: Product[];
  productInCartTotal: boolean;
  addProductCart: (product: Product) => void;
  romeverProductCart: (productId: string) => void;
  buyProduct:  () => void;
}
export const CartContext = createContext({} as CartProps)
interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
 const [productInCart, setProductInCart] = useState<Product[]>(() => {
  const { cookies } = parseCookies(null, "PRODUCTS_IN_CART");

  if (cookies) {
    return JSON.parse(cookies);
  }

  return [];
});

const [productInCartTotal, setProductInCartTotal] = useState(false);

useEffect(() => {
  setCookie(null, "PRODUCTS_IN_CART", JSON.stringify(productInCart), {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  if (productInCart.length === 0) {
    setProductInCartTotal(false);
  }
}, [productInCart]);

  function addProductCart(product: Product) {
    const containInCart = productInCart.findIndex((item) => {
      return item.id === product.id;
    });

    if (containInCart < 0) {
      setProductInCart((state) => [...state, product]);
    } else {
      setProductInCart((state) => [...state]);
    }
  }

  function romeverProductCart(productId: string) {
    const newProductsInCart = productInCart.filter((item) => {
      return item.id !== productId;
    });

    setProductInCart(newProductsInCart);
  }

  function buyProduct() {
   setProductInCartTotal(!productInCartTotal);
  }


  return (
    <CartContext.Provider value={{
      productInCart, 
      addProductCart, 
      romeverProductCart, 
      productInCartTotal, 
      buyProduct
     }}>
      {children}
    </CartContext.Provider>
  )
}
