import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Header () {
    const {userData} = useContext(UserContext);

    return(
        <HeaderSC>
            <TrackitLogo>Trackit</TrackitLogo>
            <ProfilePic src={userData.image} alt="Sua Imagem do Perfil" />
        </HeaderSC>
    )
}

const HeaderSC = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 18px;
`;

const ProfilePic = styled.img`
    border-radius: 50%;
    width: 51px;
    height: 51px;
    background-color: #ffffff;
`

const TrackitLogo = styled.h1`
    width: 97px;
    height: 49px;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
    font-family: 'Playball', cursive;
`