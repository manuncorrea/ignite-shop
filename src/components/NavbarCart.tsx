import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "phosphor-react";
import camiseta1 from '../assets/camisetas/1.png';
import {
  NavbarCartCartClose, NavbarCartContainer, NavbarCartContent, NavbarCartDetails,
  NavbarCartFooter, NavbarCartFooterSection, NavbarContentImage
} from "../styles/components/NavbarCart";


export function NavbarCart() {
  return (
    <Dialog.Portal>
      <NavbarCartContent>
        <NavbarCartCartClose>
          <X size={24} weight="bold" />
        </NavbarCartCartClose>
        <Dialog.Title>Sacola de compras</Dialog.Title>
    
        <section>
          <NavbarCartContainer>
            <NavbarContentImage>
              <Image 
                src={camiseta1}    
                width={100}
                height={93}
                alt=""
              />
            </NavbarContentImage>
            <NavbarCartDetails>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </NavbarCartDetails>
          </NavbarCartContainer>

          <NavbarCartContainer>
            <NavbarContentImage>
              <Image 
                src={camiseta1}    
                width={100}
                height={93}
                alt=""
              />
            </NavbarContentImage>
            <NavbarCartDetails>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </NavbarCartDetails>
          </NavbarCartContainer>
        </section>

        <NavbarCartFooter>
          <NavbarCartFooterSection>
            <div>
              <span>Quantidade</span>
              <p>3 itens</p>
            </div>
            <div>
              <span>Valor total</span>
              <p>R$ 270,00</p>
            </div>
          </NavbarCartFooterSection>
          <button>Finalizar compra</button>
        </NavbarCartFooter>

      </NavbarCartContent>
    </Dialog.Portal>
  );
}
