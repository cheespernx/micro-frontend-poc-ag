import styled from "styled-components";
export interface Props {
  expand?: boolean;
}

export const Container = styled.button<Props>`
  width: 100%;
  max-width: ${(props) => (props.expand ? '100%' : '250px')};

  background: #FF6600;
  color: #fff;

  border-radius: 8px;
  outline: none;
  border: none;

  padding: 8px;

  font-weight: 600;

  display: flex;
  align-items: center !important;
  justify-content: center !important;

  text-align: center !important;

  cursor: pointer;

  position: relative;

  height: 35px;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    font-size: 1rem;
    height: 45px;
  }
`