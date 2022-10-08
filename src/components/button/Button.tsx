import { ButtonHTMLAttributes } from "react";
import { CustomButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <CustomButton>{text}</CustomButton>
  )
}