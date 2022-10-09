import { ButtonHTMLAttributes } from "react";
import { CustomButton } from "./styles";

export function Button({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <CustomButton {...rest}>{children}</CustomButton>
  )
}