import * as Dialog from "@radix-ui/react-dialog";
import Image from 'next/future/image';
import Link from "next/link";
import { Handbag } from "phosphor-react";
import logoImg from "../assets/logo.svg";
import { ButtonCheckoutNavbar, ContainerHeader } from "../styles/components/Header";
import { NavbarCart } from "./NavbarCart";

export function Header() {
 
  return(
    <ContainerHeader>
      <Link href={"/"}>
        <Image src={logoImg} alt="" />  
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonCheckoutNavbar>
            <Handbag  size={24}/>
            <span>1</span>
          </ButtonCheckoutNavbar>
        </Dialog.Trigger>

        <NavbarCart />
      </Dialog.Root>
    </ContainerHeader>
  )
}