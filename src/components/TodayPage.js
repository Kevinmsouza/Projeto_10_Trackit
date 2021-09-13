import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import TodayContext from "../contexts/TodayContext";
import UserContext from "../contexts/UserContext";
import { getTodayData } from "../services/Trackit";
import Header from "./Header";
import Menu from "./Menu";
import { HabitsBox, HabitsBoxHeader, Page, GreenTxt } from "./shared/SharedStyleds";
import TodoTask from "./TodoTaks";


export default function TodayPage() {
    const { userData } = useContext(UserContext);
    const { todayData, setTodayData } = useContext(TodayContext)
    let history = useHistory();

    useEffect(() => {
        renderAllTodayHabits();
    }, [])

    function renderAllTodayHabits() {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        getTodayData(config)
            .then(res => {
                setTodayData(res.data);
            })
            .catch(err => {
                alert(err);
                history.push("/");
            })
    }
    function calcPercentage() {
        const numberOfHabits = todayData.length;
        const numberOfDones = todayData.filter((habit) => habit.done).length;
        return ((numberOfDones * 100) / numberOfHabits).toFixed(0);
    }

    return (
        <Page white={false}>
            <Header />
            <HabitsBox>
                <HabitsBoxHeader>
                    <div>
                        <h2>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h2>
                        <GreySubtile>
                            <GreenTxt isGreen={calcPercentage() > 0}>
                                {calcPercentage() > 0 ? `${calcPercentage()}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
                            </GreenTxt>
                        </GreySubtile>
                    </div>
                </HabitsBoxHeader>
                {todayData.map(taskData => <TodoTask taskData={taskData} renderAllTodayHabits={renderAllTodayHabits} />)}
            </HabitsBox>

            <Menu />
        </Page>
    )
}

const GreySubtile = styled.p`
    font-size: 18px;
    line-height: 23px;
    color: #BABABA;
`