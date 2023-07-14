import React from "react";
import { Input, InputLabel, InputContainer } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  name?: string;
  label?: string;
  id?: string;
  disabled?: boolean;
  value?: string;
  type?: string | 'text';
}

const InputText: React.FC<Props> = ({ id, label, ...props }) => {

  return (
    <InputContainer>
      <Input
        id={id}
        name={props.name}
        disabled={props.disabled}
        value={props.value}
        type={props.type}
        { ...props }
      />
      <InputLabel htmlFor={id}>{label}</InputLabel>
    </InputContainer>
  );
};

export default InputText;
