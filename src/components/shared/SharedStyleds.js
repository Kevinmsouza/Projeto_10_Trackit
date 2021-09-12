import styled from "styled-components";
import logoImg from "../../assets/img/Logo.svg";

const mainColor= "#52B6FF"

const Page = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.white? "#ffffff": "#f2f2f2"};
    padding: 70px 0;
    overflow-y: scroll;
`;

const Logo = styled.div`
    margin: 0 0 32px 0;
    width: 180px;
    height: 178.38px;
    background: url(${logoImg});
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 0 11px;
    margin-bottom: 6px;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    &::placeholder{
        font-size: 20px;
        line-height: 25px;
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
    }
    &:hover{
        filter: brightness(0.95);
    }
    &:disabled{
        background-color: #F2F2F2;
        color: #AFAFAF;
    }
    &:focus{
        outline: none;
    }
`;

const LoginButton = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: ${mainColor};
    color: #ffffff;
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: none;
    font-size: 21px;
    &:disabled{
        opacity: 0.7;
    }
`;

const TextButton = styled.span`
    color: ${mainColor};
    font-size: ${props => props.fontsize};
    text-decoration: ${props => props.underline ? "underline" : "none"};
`;

export {
    mainColor,
    Page,
    Logo,
    Input,
    LoginButton,
    TextButton
}