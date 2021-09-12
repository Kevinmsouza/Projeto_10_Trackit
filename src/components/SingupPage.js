import { LoginButton, Input, Page, Logo, TextButton } from "./shared/SharedStyleds";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { sendSingupRequest } from "../services/Trackit";
import Loader from "react-loader-spinner";

export default function SingupPage() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function singup() {
        setIsLoading(true);
        const body = {
            email,
            password,
            name,
            image
        }
        sendSingupRequest(body)
            .then(res => {
                history.push("/");
            })
            .catch(err => {
                if (err.response.status === 409) {
                    alert("Email Já utilizado!")
                    return
                }
                if (err.response.status === 422) {
                    alert("Preencha os campos corretamente!")
                    return
                }
                alert(err)
            })
            .finally(() => setIsLoading(false));
    }


    return (
        <Page white>
            <Logo />
            <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
            <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
            <Input placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} />
            <Input placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} disabled={isLoading} />
            <LoginButton  onClick={singup} disabled={isLoading} >
                {!isLoading ? "Cadastrar" : <Loader type="ThreeDots" color="#FFF" height={40} width={80} />}
            </LoginButton>
            <Link to={!isLoading ? "/" : "/cadastro"} >
                <TextButton fontsize="14px" underline={true} >
                    Já tem uma conta? Faça login!
                </TextButton>
            </Link>
        </Page>

    )
}