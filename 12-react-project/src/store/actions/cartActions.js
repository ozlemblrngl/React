import React from 'react'

export const ADD_TO_CART =  "ADD_TO-CART"

export  function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  } 
}

export function removeFromCart(){
    return{
        type: REMOVE_FROM_CART,
        payload: product
    }
     
}
