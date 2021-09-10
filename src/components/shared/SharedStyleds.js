import styled from "styled-components";
import logoImg from "../../assets/img/Logo.svg";

const mainColor= "#52B6FF"

const Page = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;

const Logo = styled.div`
    margin: 68px 0 32px 0;
    width: 180px;
    height: 178.38px;
    background: url(${logoImg});
`;

const Form = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 0 11px;
    margin-bottom: 6px;
    &::placeholder{
        font-size: 20px;
        line-height: 25px;
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
    }
`;

const BlueButton = styled.button`
    background-color: ${mainColor};
    color: #ffffff;
    ${props => props.isBig ? "width: 303px; height: 45px; margin-bottom: 25px;" : ""}
    border-radius: 5px;
    border: none;
    font-size: 21px;
    &:hover{
        filter: brightness(0.95);
    }
`;

const TextButton = styled.span`
    color: ${mainColor};
    font-size: ${props => props.fontsize};
    text-decoration: ${props => props.underline ? "underline" : "none"};
`;

export {
    Page,
    Logo,
    Form,
    BlueButton,
    TextButton
}