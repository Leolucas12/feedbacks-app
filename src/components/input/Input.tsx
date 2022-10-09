import { InputHTMLAttributes } from "react";
import { CustomInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholer: string;
}

export function Input({ name, type, placeholer, ...rest }: InputProps) {
  return (
    <CustomInput {...rest} name={name} type={type} placeholder={placeholer} />
  )
}