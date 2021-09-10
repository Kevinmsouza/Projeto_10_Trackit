import { BlueButton, Form, Page, Logo, TextButton } from "../shared/SharedStyleds";
import { Link } from "react-router-dom";

export default function SingupPage() {
    return (
        <Page>
            <Logo />
            <Form placeholder="email" />
            <Form placeholder="senha" />
            <Form placeholder="nome" />
            <Form placeholder="foto" />
            <BlueButton isBig={true} >Cadastrar</BlueButton>
            <Link to="/" >
                <TextButton fontsize="14px" underline={true}>
                    Já tem uma conta? Faça login!
                </TextButton>
            </Link>
        </Page>

    )
}