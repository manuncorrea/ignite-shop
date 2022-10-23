import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { userCart } from "../hook/useCart";
import {
  NavbarCartCartClose, NavbarCartContainer, NavbarCartContent, NavbarCartDetails,
  NavbarCartFooter, NavbarCartFooterSection, NavbarContentImage
} from "../styles/components/NavbarCart";


export function NavbarCart() {
  const [isCheckoutSession, setIsCheckoutSession] = useState(false)
  const { cart, romeverProductCart, cartTotal } = userCart();
  const quantityItem = cart.length;

  const formattedCartTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartTotal);


  async function handleCheckoutSession() {
    try {
      setIsCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cart
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
          {cart.length <= 0 && (
            <p>Seu carrinho está vazio!!</p>
          )}
          
          {cart.map((cartItem) => (
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
              <p>{formattedCartTotal}</p>
            </div>
          </NavbarCartFooterSection>
          <button onClick={handleCheckoutSession} disabled={isCheckoutSession || quantityItem <= 0}>Finalizar compra</button>
        </NavbarCartFooter>

      </NavbarCartContent>
    </Dialog.Portal>
  );
}
