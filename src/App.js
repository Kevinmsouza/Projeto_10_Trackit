import "./reset.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from "./components/LoginPage/LoginPage"

export default function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route to="/" >
                    <LoginPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}