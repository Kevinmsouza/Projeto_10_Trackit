import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import { createHabit } from "../services/Trackit";
import { Input, TextButton } from "./shared/SharedStyleds"


export default function NewHabit({renderAllHabits, setIsNewHabitsVisible}) {
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
    const {userData} = useContext(UserContext);

    function toggleSelect(i) {
        let newList = [...weekdays];
        newList[i].isSelected = !weekdays[i].isSelected;
        setWeekdays(newList);
    }
    function saveHabit(){
        setIsLoading(true)
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
                renderAllHabits();
                setIsNewHabitsVisible(false);
            })
            .catch(err => alert(err))
            .finally(setIsLoading(false));
    }

    return (
        <NewHabitSC>
            <Input
                placeholder="nome do hábito" 
                value={habitName} 
                onChange={(e) => setHabitName(e.target.value)} 
            />
            <WeekdaysBox >
                {weekdays.map((day, i) => (
                    <DayButton
                        isSelected={day.isSelected} onClick={() => toggleSelect(i)} >
                        {day.name}
                    </DayButton>
                ))}
            </WeekdaysBox>
            <ButtonsBox>
                <TextButton onClick={()=> setIsNewHabitsVisible(false)}>Cancelar</TextButton>
                <SaveButton onClick={saveHabit}>Salvar</SaveButton>
            </ButtonsBox>
            
        </NewHabitSC>
    )
}

const NewHabitSC = styled.div`
    margin-top: 28px;
    width: 100%;
    height: 180px;
    padding: 18px;
    background-color: #fff;
`;

const WeekdaysBox = styled.div`
    display:flex;
`;

const DayButton = styled.button`
    margin-right: 4px;
    background: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size: 20px;
`;

const ButtonsBox = styled.div`
    width: 176px;
    height: 35px;
    margin: 36px 0 0 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const SaveButton = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: #52B6FF;
    color: #fff;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    &:disabled{
        opacity: 0.7;
    }
`;