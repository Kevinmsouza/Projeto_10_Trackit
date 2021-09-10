import { Page, Logo, Form, BlueButton, TextButton } from "../shared/SharedStyleds";
import { Link } from "react-router-dom";
import { useState } from "react";
import Loader from "react-loader-spinner";
import { sendLoginRequest } from "../../services/Trackit";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        setIsLoading(true);
        const body = {
            email,
            password
        }
        sendLoginRequest(body)
            .then(res => console.log(res.data))
            .catch(err => alert(err))
            .finally(() => setIsLoading(false))
        
    }

    return (
        <Page>
            <Logo />
            <Form placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
            <Form placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
            <BlueButton isBig={true} onClick={login}> {!isLoading ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={40} width={80} />} </BlueButton>
            <Link to="/cadastro">
                <TextButton fontsize="14px" underline={true}>
                    Não tem uma conta? Cadastre-se!
                </TextButton>
            </Link>

        </Page>
    )
}