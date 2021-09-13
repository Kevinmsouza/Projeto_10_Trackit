import { DayButton, WeekdaysBox, HabitTitle, HabitSC } from "./shared/SharedStyleds"
import { TrashOutline } from 'react-ionicons'
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { sendDeleteRequest } from "../services/Trackit";
import TodayContext from "../contexts/TodayContext";

export default function Habit({ habitData: { id, name, days }, renderAllHabits }) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const {userData} = useContext(UserContext);
    const {todayData, setTodayData} = useContext(TodayContext);

    function deleteHabit(){
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        sendDeleteRequest(id, config)
            .then(res => {
                setTodayData(todayData.filter((habit) => habit.id !== id))
                renderAllHabits();
            })
            .catch(err => alert(err))
    }
    return (
        <HabitSC>
            <div>
                <HabitTitle>{name}</HabitTitle>
                <WeekdaysBox>

                    {weekdays.map((day, i) => (
                        <DayButton isSelected={days.includes(i)} >
                            {day}
                        </DayButton>
                    ))}
                </WeekdaysBox>
            </div>
            <TrashOutline
                color={'#666'}
                height="17px"
                width="17px"
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px"
                }}
                onClick={deleteHabit}
            />
        </HabitSC>
    )
}

