import { HabitSC } from "./shared/SharedStyleds";
import { Checkbox } from 'react-ionicons';

export default function TodoTask({ taskData }) {

    return (
        <HabitSC bigIcon>
            <div>
                <h5>{taskData.name}</h5>
                <p>Sequência atual: {taskData.currentSequence} dias</p>
                <p>Seu recorde: {taskData.highestSequence} dias</p>
            </div>
            <Checkbox
                color={'#EBEBEB'}
                height="90px"
                width="90px"
            />
        </HabitSC>
    )
}

