import Header from "./Header";
import Menu from "./Menu";
import { HabitsBox, HabitsBoxHeader, Page } from "./shared/SharedStyleds";



export default function HistoryPage() {
    return (
        <Page>
            <Header />
            <HabitsBox>
                <HabitsBoxHeader>
                    Histórico
                </HabitsBoxHeader>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HabitsBox>
            <Menu />
        </Page>
    )
}