import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../context/CartContextProvider";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { product } = req.body as {product: Product[]}

  if(req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.'})
  }

  if(!product) {
    return res.status(400).json({ error: 'Price not found.'})
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',

    line_items: product.map((item) => ({
      price: item.defaultPriceId,
      quantity: 1,
    })),

    success_url: successUrl,
    cancel_url: cancelUrl,
    
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}