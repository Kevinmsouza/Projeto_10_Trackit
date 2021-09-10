import "./reset.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SingupPage from "./components/SingupPage/SingupPage";

export default function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <LoginPage />
                </Route>
                <Route path="/cadastro" exact>
                    <SingupPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}