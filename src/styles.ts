import styled from "styled-components";
export interface Props {
  width?: number;
}

export const FormContainer = styled.div`
  padding: 30px;
  background: #F8F8F8;
`

export const FormContent = styled.div`
  justify-content: flex-start !important;
  margin: 40px 0;
`

export const SectionFW = styled.div`
  width: 100%;
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
`

export const InnerFormRow = styled.div`
  justify-content: flex-start !important;
  margin-top: 30px;
`
export const FormDiv = styled.div<Props>`
  position: relative;
  height: 48px;
  margin-right: 30px;

  width: ${(props) => (props.width+'%')};

  @media screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`
