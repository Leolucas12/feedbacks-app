import { TextareaHTMLAttributes } from "react";
import { CustomTextarea } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholer: string;
}

export function Textarea({ name, placeholer }: TextareaProps) {
  return (
    <CustomTextarea name={name} placeholder={placeholer} />
  )
}