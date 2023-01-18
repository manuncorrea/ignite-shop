import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContextProvider";
import {
  NavbarCartCartClose, NavbarCartContainer, NavbarCartContent, NavbarCartDetails,
  NavbarCartFooter, NavbarCartFooterSection, NavbarContentImage
} from "../styles/components/NavbarCart";
import { formatteMoney } from "../utils/formatter";


export function NavbarCart() {

  const {productInCart, romeverProductCart, productInCartTotal, buyProduct} = useContext(CartContext);

  const quantityItem = productInCart.length;

  const [isCheckoutSession, setIsCheckoutSession] = useState(false);

  const totalProductPrice = productInCart.reduce((total, item) => {
    return total + item.price;
  }, 0)

  async function handleCheckoutSession() {
    try {
      setIsCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: productInCart
      });

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl;
    } catch(err) {
      setIsCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Dialog.Portal>
      <NavbarCartContent>
        <NavbarCartCartClose>
          <X size={24} weight="bold" />
        </NavbarCartCartClose>
        <Dialog.Title>Sacola de compras</Dialog.Title>
    
        <section>
          {productInCart.length <= 0 && (
            <p>Seu carrinho está vazio!!</p>
          )}
          
          {productInCart.map((cartItem) => (
           <>
            <NavbarCartContainer key={cartItem.id}>
              <NavbarContentImage>
                <Image 
                  src={cartItem.imageUrl}    
                  width={100}
                  height={93}
                  alt=""
                />
              </NavbarContentImage>
              <NavbarCartDetails>
                <p>{cartItem.name}</p>
                <strong>{cartItem.price}</strong>
                <button onClick={() => romeverProductCart(cartItem.id)}>Remover</button>
              </NavbarCartDetails>
            </NavbarCartContainer>
           </>
          ))}
        </section>

        <NavbarCartFooter>
          <NavbarCartFooterSection>
            <div>
              <span>Quantidade</span>
              <p>{quantityItem} {quantityItem > 1 ? "itens": "item"}</p>
            </div>
            <div>
              <span>Valor total</span>
              <p>{formatteMoney(totalProductPrice)}</p>
            </div>
          </NavbarCartFooterSection>
          <button onClick={handleCheckoutSession} disabled={isCheckoutSession || quantityItem <= 0}>Finalizar compra</button>
        </NavbarCartFooter>

      </NavbarCartContent>
    </Dialog.Portal>
  );
}
