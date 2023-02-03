import React from "react";

export interface ButtonInterface {
   onClick: React.MouseEventHandler<HTMLButtonElement>
   children: React.ReactNode
   color: string
}