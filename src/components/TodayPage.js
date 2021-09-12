import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getTodayTasks } from "../services/Trackit";
import Header from "./Header";
import Menu from "./Menu";
import { HabitsBox, HabitsBoxHeader, Page } from "./shared/SharedStyleds";
import TodoTask from "./TodoTaks";


export default function TodayPage() {
    const {userData} = useContext(UserContext);
    const [todayTasks, setTodayTasks] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        getTodayTasks(config)
        .then(res => setTodayTasks(res.data))
        .catch(err => {
            alert(err);
            history.push("/")
        })

    }, [])

    return(
        <Page white={false}>
            <Header /> 
                <HabitsBox>
                    <HabitsBoxHeader>

                    </HabitsBoxHeader>

                </HabitsBox>
                {todayTasks.map(taskData => <TodoTask taskData={taskData} />)}
            <Menu />
        </Page>
    )
}
