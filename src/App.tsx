import { FormContent, FormDiv, FormRow, SectionFW, FormContainer } from "./styles";
import InputText from "./components/Input";
import Title from "./components/Title";
import Button from "./components/Button";
import { useState } from "react";
import { UserInfo } from "./interfaces/user.interface";

function App() {

  const [ userInfo, setUserInfo ] = useState<UserInfo>();
  
  window.addEventListener("message", ({ data, source }) => {
    if (data) setUserInfo(data);
  });

  const handleInputValueChange = (key: string, value: string) => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  function updateUserInfo() {
    const response = {
      event: "userInfoUpdate",
      userInfo
    };

    if (window && window.parent) {
      window.parent.postMessage(response, '*');
    }
  }

  return (
    <div className="MinhaContaContainer">
      <SectionFW>

        <FormContainer>
          <form name="myAccountForm">
            <Title strong="Dados" span="Pessoais" />

            <FormContent>
              <FormRow>
              <FormDiv width={30}>
                  <InputText
                    id="txtUsername"
                    name="txtUsername"
                    label="Usuário"
                    disabled
                    key={"txtUsername"}
                    value={userInfo?.userName}
                    onChange={(event) => {handleInputValueChange("userName", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("birthDate", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("cpfNumber", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("firstName", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("lastName", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("email", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("phone", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("cepNumber", event.target.value)}}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtLogradouro"
                    name="txtLogradouro"
                    label="Logradouro"
                    key={"txtLogradouro"}
                    value={userInfo?.street}
                    onChange={(event) => {handleInputValueChange("street", event.target.value)}}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtBairro"
                    name="txtBairro"
                    label="Bairro"
                    key={"txtBairro"}
                    value={userInfo?.neighbourhood}
                    onChange={(event) => {handleInputValueChange("neighbourhood", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("number", event.target.value)}}
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
                    onChange={(event) => {handleInputValueChange("complement", event.target.value)}}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtCidade"
                    name="txtCidade"
                    label="Cidade"
                    key={"txtCidade"}
                    value={userInfo?.city}
                    onChange={(event) => {handleInputValueChange("city", event.target.value)}}
                  />
                </FormDiv>
                <FormDiv width={30}>
                  <InputText
                    id="txtEstado"
                    name="txtEstado"
                    label="Estado"
                    key={"txtEstado"}
                    value={userInfo?.state}
                    onChange={(event) => {handleInputValueChange("state", event.target.value)}}
                  />
                </FormDiv>
              </FormRow>
            </FormContent>
          </form>

          <Button className="cst-confirm-button" onClick={() => updateUserInfo()}>
            Alterar dados e salvar
          </Button>
        </FormContainer>
      </SectionFW>
    </div>
  );
}

export default App;
