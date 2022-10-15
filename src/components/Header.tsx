import Link from "next/link";
import { ContainerHeader } from "../styles/components/Header";
import Image from 'next/future/image';
import logoImg from '../assets/logo.svg'
import { useRouter } from "next/router";
import { Handbag } from "phosphor-react";

export function Header() {
  const { pathname } = useRouter();

  const handleCartButton = pathname !== '/success'
  return(
    <ContainerHeader>
        <Link href={"/"}>
          <Image src={logoImg} alt="" />  
        </Link>

        <button>
          {handleCartButton && <Handbag  size={24}/>}
        </button>
        
      </ContainerHeader>
  )
}