import styled from "styled-components";
import {Page, Logo, Form, BlueButton, TextButton} from "../shared/SharedStyleds";

export default function LoginPage() {
    return(
        <Page>
            <Logo />
            <Form placeholder="email" />
            <Form placeholder="senha" />
            <BlueButton isBig={true} > Entrar </BlueButton>
            <TextButton fontsize="14px" underline={true}>
                Não tem uma conta? Cadastre-se!
            </TextButton>
        </Page>
    )
}