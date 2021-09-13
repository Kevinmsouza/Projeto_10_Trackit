import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SingupPage from "./components/SingupPage";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import TodayPage from "./components/TodayPage";
import HabitsPage from "./components/HabitsPage";
import TodayContext from "./contexts/TodayContext";
import HistoryPage from "./components/HistoryPage";

export default function App() {
    const [userData, setUserData] = useState("");
    const [todayData, setTodayData] = useState([])
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <TodayContext.Provider value={{ todayData, setTodayData }}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <LoginPage />
                        </Route>
                        <Route path="/cadastro" exact>
                            <SingupPage />
                        </Route>
                        <Route path="/hoje" exact>
                            <TodayPage />
                        </Route>
                        <Route path="/habitos" exact>
                            <HabitsPage />
                        </Route>
                        <Route path="/historico" exact>
                            <HistoryPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </TodayContext.Provider>
        </UserContext.Provider>
    )
}