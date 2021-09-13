import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import { createHabit } from "../services/Trackit";
import { Input, TextButton, WeekdaysBox, DayButton, SaveButton } from "./shared/SharedStyleds"
import Loader from "react-loader-spinner";
import dayjs from "dayjs";
import TodayContext from "../contexts/TodayContext";

export default function NewHabit({renderAllHabits, setIsNewHabitsVisible, isNewHabitsVisible}) {
    const {userData} = useContext(UserContext);
    const {todayData, setTodayData} = useContext(TodayContext);
    const [weekdays, setWeekdays] = useState([
        {
            name: "D",
            isSelected: false
        },
        {
            name: "S",
            isSelected: false
        },
        {
            name: "T",
            isSelected: false
        },
        {
            name: "Q",
            isSelected: false
        },
        {
            name: "Q",
            isSelected: false
        },
        {
            name: "S",
            isSelected: false
        },
        {
            name: "S",
            isSelected: false
        }
    ])
    const [habitName, setHabitName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    function toggleSelect(i) {
        let newList = [...weekdays];
        newList[i].isSelected = !weekdays[i].isSelected;
        setWeekdays(newList);
    }
    function saveHabit(){
        if (weekdays.map((day, i) => day.isSelected ? i : -1).filter((index) => index >= 0 ).length === 0) {
            alert("Selecione os dias do habito!")
            return;
        }
        setIsLoading(true);
        const body = {
            name: habitName,
            days: weekdays.map((day, i) => day.isSelected ? i : -1).filter((index) => index >= 0 )
        }
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        createHabit(body, config)
            .then(res => {
                if(res.data.days.includes(dayjs().$W)){
                    setTodayData([...todayData, res.data]);
                }
                setHabitName("");
                setWeekdays(weekdays.map((day) => {
                    return {...day, isSelected: false};
                }));
                renderAllHabits();
                setIsNewHabitsVisible(false);
            })
            .catch(err => {
                if (err.response.status === 422){
                    alert("Dê nome à seu novo Habito!");
                    return;
                }
                alert(err);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <NewHabitSC hidden={!isNewHabitsVisible}>
            <Input
                placeholder="nome do hábito" 
                value={habitName} 
                onChange={(e) => setHabitName(e.target.value)}
                disabled={isLoading}
            />
            <WeekdaysBox >
                {weekdays.map((day, i) => (
                    <DayButton
                        isSelected={day.isSelected}
                        onClick={() => toggleSelect(i)} 
                        disabled={isLoading}
                    >
                        {day.name}
                    </DayButton>
                ))}
            </WeekdaysBox>
            <ButtonsBox>
                <TextButton onClick={()=> isLoading ? "" : setIsNewHabitsVisible(false)}>Cancelar</TextButton>
                <SaveButton onClick={saveHabit} disabled={isLoading} >
                    {isLoading ? <Loader type="ThreeDots" color="#FFF" height={35} width={50} /> : "Salvar"}
                </SaveButton>
            </ButtonsBox>
            
        </NewHabitSC>
    )
}

const NewHabitSC = styled.div`
    margin: 28px 0 10px 0;
    width: 100%;
    height: 180px;
    padding: 18px;
    background-color: #fff;
    ${props => props.hidden ? "display: none;": ""}
`;

const ButtonsBox = styled.div`
    width: 176px;
    height: 35px;
    margin: 36px 0 0 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
