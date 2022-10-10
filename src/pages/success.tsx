import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Suscess() {
  return(
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Emanuele Correa</strong>, sua <strong>Camiseta Bayond the limits</strong> já está a caminho de sua casa
      </p>

      <Link href="/"> 
        Voltar ao catálago
      </Link>
    </SuccessContainer>
  )
}