import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext } from "react"
import Stripe from "stripe"
import { CartContext, Product } from "../../context/CartContextProvider"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { formatteMoney } from "../../utils/formatter"

interface ProductPropsType {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  };
}

export default function Product({ product }: ProductPropsType) {
debugger;
  const {productInCart, addProductCart } = useContext(CartContext);
  const { isFallback } = useRouter();

  const productContainerInCart = productInCart.findIndex((item) => {
    return item.id === product.id;
  })

  if(isFallback) {
    return <p>Loadiang...</p>
  }

  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatteMoney(product.price)}</span>
          <p>{product.description}</p>
          <button disabled={productContainerInCart >= 0}  
          onClick={() => addProductCart(product)}>
            {productContainerInCart >= 0
            ? "Adicionar ao carrinho"
            : "Colocar no carrinho"
            }
          
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [ 
      { params: {id: 'prod_MZvWQrI9diLbDf'}}
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}