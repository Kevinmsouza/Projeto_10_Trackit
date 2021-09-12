import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { getTodayTasks } from "../services/Trackit";
import Header from "./Header";
import Menu from "./Menu";
import { Page } from "./shared/SharedStyleds";
import TodoTask from "./TodoTaks";


export default function TodayPage() {
    const {userData} = useContext(UserContext);
    const [todayTasks, setTodayTasks] = useState([]);

    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        getTodayTasks(config)
        .then(res => setTodayTasks(res.data))
        .catch(err => alert(err))

    }, [])

    return(
        <Page white={false}>
            <Header /> 
                {todayTasks.map(taskData => <TodoTask taskData={taskData} />)}
            <Menu />
        </Page>
    )
}