import { TextareaHTMLAttributes } from "react";
import { CustomTextarea } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholer: string;
}

export function Textarea({ name, placeholer, ...rest }: TextareaProps) {
  return (
    <CustomTextarea {...rest} name={name} placeholder={placeholer} />
  )
}