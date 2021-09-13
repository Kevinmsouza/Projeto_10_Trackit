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

const WeekdaysBox = styled.div`
    display:flex;
`;

const DayButton = styled.button`
    margin-right: 4px;
    background: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size: 20px;
`;

const HabitTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 8px;
`;

const HabitSC = styled.div`
    width: 90vw;
    height: 94px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 0 0 0 15px;
    position:relative;
    p {
        font-size: 13px;
    }
`;

const HabitsBox = styled.div`
    margin: 30px 0;
    padding: 0 18px;
    width: 100vw;
    font-size: 18px;
    & > p {
        margin-top: 28px;
    }
`;

const HabitsBoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 20px;
`;
const SaveButton = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: ${mainColor};
    color: #fff;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    &:disabled{
        opacity: 0.7;
    }  
`;

const GreenTxt = styled.span`
    color: ${props => props.isGreen ? "#8FC549" : "inherit"};
`
const Form = styled.form`
    width: 303px;
`

export {
    mainColor,
    Page,
    Logo,
    Input,
    LoginButton,
    TextButton,
    WeekdaysBox,
    DayButton,
    HabitTitle,
    HabitSC,
    HabitsBox,
    HabitsBoxHeader,
    SaveButton,
    GreenTxt,
    Form
}