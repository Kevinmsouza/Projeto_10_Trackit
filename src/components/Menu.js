import styled from "styled-components"
import { TextButton, mainColor } from "./shared/SharedStyleds";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";

export default function Menu() {
    const percentage = 30;
    return (
        <Footer>
            <Link to="/habitos">
                <TextButton>Hábitos</TextButton>
            </Link>
            <Link to="/hoje">
                <TodayButton>
                    <CircularProgressbar
                        value={percentage}
                        background
                        backgroundPadding={6}
                        strokeWidth={10}
                        styles={buildStyles({
                            backgroundColor: mainColor,
                            textColor: "#fff",
                            pathColor: "#fff"
                        })}
                    />
                    <Innertxt>Hoje</Innertxt>
                </TodayButton>
            </Link>
            <Link to="/historico">
                <TextButton>Histórico</TextButton>
            </Link>
        </Footer >
    )
}

const Footer = styled.footer`
    width: 100vw;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    display:flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
`;

const TodayButton = styled.div`
    width: 91px;
    margin-bottom: 35px;
    position: relative;
`;
const Innertxt = styled.span`
    color: #fff;
    position: absolute;
    left: 27%;
    top: 37%;
`