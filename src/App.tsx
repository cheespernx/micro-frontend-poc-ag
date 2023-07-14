import { FormContent, FormDiv, FormRow, SectionFW, FormContainer } from "./styles";
import InputText from "./components/Input";
import Title from "./components/Title";
import Button from "./components/Button";
import { useState } from "react";
import { UserInfo } from "./interfaces/user.interface";

function App() {

  const [ userInfo, setUserInfo ] = useState<UserInfo>();

  let parent: MessageEventSource | null = null;
  
   window.addEventListener("message", ({ data, source }) => {
    if (parent === null) {
      parent = source;
    }

    if (data) setUserInfo(data);
  });

  return (
    <div className="MinhaContaContainer">
      <SectionFW>

        <FormContainer>
          <form name="myAccountForm">
            <Title strong="Dados" span="Pessoais" />

            <FormContent>
              <FormRow>
              <FormDiv width={20}>
                  <InputText
                    id="txtUsername"
                    name="txtUsername"
                    label="Usuário"
                    disabled
                    key={"txtUsername"}
                    value={userInfo?.userName}
                  />
                </FormDiv>
                <FormDiv width={20}>
                  <InputText
                    id="dataNascimento"
                    name="dataNascimento"
                    label="Data de Nascimento"
                    disabled
                    key={"dataNascimento"}
                    value={userInfo?.birthDate}
                  />
                </FormDiv>
                <FormDiv width={20}>
                  <InputText
                    id="txtCPF"
                    name="txtCPF"
                    label="CPF"
                    disabled
                    key={"txtCPF"}
                    value={userInfo?.cpfNumber}
                  />
                </FormDiv>
              </FormRow>

              <FormRow>
                <FormDiv width={30}>
                  <InputText
                    id="txtPrimeiroNome"
                    name="txtPrimeiroNome"
                    label="Primeiro Nome"
                    disabled
                    key={"txtPrimeiroNome"}
                    value={userInfo?.firstName}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtSobrenome"
                    name="txtSobrenome"
                    label="Sobrenome"
                    disabled
                    key={"txtSobrenome"}
                    value={userInfo?.lastName}
                  />
                </FormDiv>
              </FormRow>

              <FormRow>
                <FormDiv width={30}>
                  <InputText
                    id="txtEmail"
                    name="txtEmail"
                    label="E-mail"
                    disabled
                    key={"txtEmail"}
                    value={userInfo?.email}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtCelular"
                    name="txtCelular"
                    label="Celular"
                    type="number"
                    disabled
                    key={"txtCelular"}
                    value={userInfo?.phone}
                  />
                </FormDiv>
              </FormRow>
            </FormContent>

            <Title strong="Dados" span="De Localização" />

            <FormContent>
              <FormRow>
                <FormDiv width={20}>
                  <InputText
                    id="txtCEP"
                    name="txtCEP"
                    label="CEP"
                    key={"txtCEP"}
                    value={userInfo?.cepNumber}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtLogradouro"
                    name="txtLogradouro"
                    label="Logradouro"
                    key={"txtLogradouro"}
                    value={userInfo?.street}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtBairro"
                    name="txtBairro"
                    label="Bairro"
                    key={"txtBairro"}
                    value={userInfo?.neighbourhood}
                  />
                </FormDiv>
                <FormDiv width={10}>
                  <InputText
                    id="txtNumero"
                    name="txtNumero"
                    label="Nº"
                    key={"txtNumero"}
                    type="number"
                    value={userInfo?.number}
                  />
                </FormDiv>
              </FormRow>
              <FormRow>
                <FormDiv width={30}>
                  <InputText
                    id="txtComplemento"
                    name="txtComplemento"
                    label="Complemento"
                    key={"txtComplemento"}
                    value={userInfo?.complement}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtCidade"
                    name="txtCidade"
                    label="Cidade"
                    key={"txtCidade"}
                    value={userInfo?.city}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtEstado"
                    name="txtEstado"
                    label="Estado"
                    key={"txtEstado"}
                    value={userInfo?.state}
                  />
                </FormDiv>
              </FormRow>
            </FormContent>
          </form>

          <Button className="cst-confirm-button">
            Alterar dados e salvar
          </Button>
        </FormContainer>
      </SectionFW>
    </div>
  );
}

export default App;
