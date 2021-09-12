import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import TodayContext from "../contexts/TodayContext";
import UserContext from "../contexts/UserContext";
import { getTodayData } from "../services/Trackit";
import Header from "./Header";
import Menu from "./Menu";
import { HabitsBox, HabitsBoxHeader, Page } from "./shared/SharedStyleds";
import TodoTask from "./TodoTaks";


export default function TodayPage() {
    const { userData } = useContext(UserContext);
    const { todayData, setTodayData } = useContext(TodayContext)
    let history = useHistory();

    useEffect(() => {
        renderAllTodayHabits();
    }, [])

    function renderAllTodayHabits(){
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

    return (
        <Page white={false}>
            <Header />
            <HabitsBox>
                <HabitsBoxHeader>

                </HabitsBoxHeader>
                {todayData.map(taskData => <TodoTask taskData={taskData} renderAllTodayHabits={renderAllTodayHabits} />)}
            </HabitsBox>

            <Menu />
        </Page>
    )
}
