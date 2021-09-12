import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getHabitsList } from "../services/Trackit";
import Habit from "./Habit";
import Header from "./Header";
import Menu from "./Menu";
import NewHabit from "./NewHabit";
import { Page } from "./shared/SharedStyleds";

export default function HabitsPage() {
    const [habits, SetHabits] = useState([]);
    const { userData } = useContext(UserContext);
    const [isNewHabitsVisible, setIsNewHabitsVisible] = useState(false);
    let history = useHistory();

    useEffect(() => {
        renderAllHabits();
    }, [])

    function renderAllHabits() {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        getHabitsList(config)
            .then(res => SetHabits(res.data))
            .catch(err => {
                alert(err);
                history.push("/");
            })
    }
    return (
        <Page>
            <Header />
            <HabitsBox>
                <HabitsBoxHeader>
                    Meus hábitos
                    <PlusButton onClick={() => setIsNewHabitsVisible(true)}>+</PlusButton>
                </HabitsBoxHeader>
                {isNewHabitsVisible ? (<NewHabit
                    renderAllHabits={renderAllHabits}
                    setIsNewHabitsVisible={setIsNewHabitsVisible}
                />) : ""}
                {habits.length === 0 ? (<p>
                    Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </p>) : habits.map((habitData) => <Habit habitData={habitData} renderAllHabits={renderAllHabits}/>)}

            </HabitsBox>
            <Menu />
        </Page>
    )
}

const HabitsBox = styled.div`
    margin-top: 30px;
    padding: 0 18px;
    width: 100vw;
    font-size: 18px;
    p {
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

const PlusButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 27px;
`