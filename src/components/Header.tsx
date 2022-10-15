import Image from 'next/future/image';
import Link from "next/link";
import { Handbag } from "phosphor-react";
import logoImg from "../assets/logo.svg";
import { ContainerHeader } from "../styles/components/Header";

export function Header() {
 
  return(
    <ContainerHeader>
        <Link href={"/"}>
          <Image src={logoImg} alt="" />  
        </Link>

        <button>
          <Handbag  size={24}/>
          <span>1</span>
        </button>
        
      </ContainerHeader>
  )
}