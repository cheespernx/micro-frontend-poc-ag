import styled from "styled-components";
export interface Props {
  expand?: boolean;
}

export const TitleContent = styled.div<Props>`
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
`