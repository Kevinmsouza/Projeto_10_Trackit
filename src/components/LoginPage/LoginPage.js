import { Page, Logo, Form, BlueButton, TextButton } from "../shared/SharedStyleds";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <Page>
            <Logo />
            <Form placeholder="email" />
            <Form placeholder="senha" />
            <BlueButton isBig={true} > Entrar </BlueButton>
            <Link to="/cadastro">
                <TextButton fontsize="14px" underline={true}>
                    Não tem uma conta? Cadastre-se!
                </TextButton>
            </Link>

        </Page>
    )
}