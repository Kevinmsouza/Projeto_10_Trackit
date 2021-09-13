import { HabitSC, HabitTitle, GreenTxt } from "./shared/SharedStyleds";
import { Checkbox } from 'react-ionicons';
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { sendDoneRequest, sendUndoneRequest } from "../services/Trackit";

export default function TodoTask({ taskData: { id, name, currentSequence, highestSequence, done }, renderAllTodayHabits }) {
    const {userData} = useContext(UserContext);
    const [fastDone, setFastDone] = useState(done);
    const [isLoading, setIsloading] = useState(false);
    function toggleDone (){
        setIsloading(true)
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        if(done){
            setFastDone(false);
            sendUndoneRequest(id, config)
                .then(res => renderAllTodayHabits())
                .catch(err => alert(err))
                .finally(() => setTimeout(() => {
                    setIsloading(false)
                }, 500))
        }else{
            setFastDone(true);
            sendDoneRequest(id, config)
                .then(res => renderAllTodayHabits())
                .catch(err => alert(err))
                .finally(() => setTimeout(() => {
                    setIsloading(false)
                }, 500))
        }
    }

    return (
        <HabitSC bigIcon>
            <div>
                <HabitTitle>{name}</HabitTitle>
                <p>Sequência atual: <GreenTxt isGreen={fastDone}>{`${currentSequence} dias`}</GreenTxt></p>
                <p>Seu recorde: <GreenTxt isGreen={fastDone && currentSequence === highestSequence}>
                    {`${highestSequence} dias`}
                </GreenTxt></p>
            </div>
            <Checkbox
                color={fastDone ? "#8FC549" : '#EBEBEB'}
                height="90px"
                width="90px"
                onClick={() => isLoading? "": toggleDone()}
            />
        </HabitSC>
    )
}

