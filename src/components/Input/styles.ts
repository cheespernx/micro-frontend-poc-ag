import styled from "styled-components";
export interface Props {
  expand?: boolean;
}

export const InputContainer = styled.div<Props>`
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem !important;
  }
`

export const InputLabel = styled.label<Props>`
  position: absolute;

  font-size: .60rem;

  padding: 0 0.25rem;

  background-color: #F8F8F8;
  color: #80868B;

  margin-left: 1rem;

  top: -.4rem;
  left: .4rem;
  
  font-weight: 500;
  z-index: 10;

  transition: 300ms;

  @media screen and (max-width: 768px){
    font-size: .75rem;
  }
`

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  font-size: .8rem;

  border: 1px solid #DADCE0;
  border-radius: 10px;

  outline: none;

  padding: 1rem;
  padding-left: 1.7rem;

  background: none;

  z-index: 1;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:focus {
    border: 1.5px solid #FF6600;
    transition: .3s;
  }

  &:focus + ${InputLabel} {
    color: #FF6600;
    transition: .3s;
  }
`
