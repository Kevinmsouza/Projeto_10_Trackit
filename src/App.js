import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SingupPage from "./components/SingupPage";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import TodayPage from "./components/TodayPage";

export default function App() {
    const [userData, setUserData] = useState("");
    return (
        <UserContext.Provider value={{userData, setUserData}}>
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
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}