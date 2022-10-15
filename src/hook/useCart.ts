/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

export function userCart() {
  const context = useContext(CartContext)
  return context
}