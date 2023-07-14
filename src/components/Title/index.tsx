import React from "react";
import { TitleContent } from "./styles";

interface Props {
  span?: string;
  strong?: string;
}

const Title: React.FC<Props> = ({ ...props }) => {
  return (
    <TitleContent>
      <strong>{props.strong} </strong>
      <span>{props.span}</span>
    </TitleContent>
  );
};

export default Title;
