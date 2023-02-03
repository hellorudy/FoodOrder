import React from "react";

export interface OrderItemInterface {
   id: string
   name: string
   price: number
   quantity: number
   remove?: React.MouseEventHandler<HTMLButtonElement>
}
export interface OrderInterface {
   items: OrderItemInterface[]
   totalAmount: number
}