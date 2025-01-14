import { Page, Logo, Input, LoginButton, TextButton, Form } from "./shared/SharedStyleds";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import Loader from "react-loader-spinner";
import { sendLoginRequest } from "../services/Trackit";
import UserContext from "../contexts/UserContext";

export default function LoginPage() {
    let history = useHistory()
    const { setUserData } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(e) {
        e.preventDefault();
        setIsLoading(true);
        const body = {
            email,
            password
        }
        sendLoginRequest(body)
            .then(res => {
                setUserData(res.data);
                history.push("/hoje");
            })
            .catch(err => {
                if (err.response.status === 422 || err.response.status === 401) {
                    alert("Dados Invalidos");
                    return;
                }
                alert(err);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <Page white>
            <Logo />
            <Form onSubmit={login}>
                <Input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    type="email"
                />
                <Input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
                <LoginButton type="submit">
                    {!isLoading ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={40} width={80} />}
                </LoginButton>
            </Form>
            <Link to="/cadastro">
                <TextButton fontsize="14px" underline={true}>
                    Não tem uma conta? Cadastre-se!
                </TextButton>
            </Link>
        </Page>
    )
}