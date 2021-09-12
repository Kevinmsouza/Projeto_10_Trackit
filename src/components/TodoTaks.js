import { HabitSC } from "./shared/SharedStyleds"

export default function TodoTask({ taskData }) {

    return (
        <HabitSC bigIcon>
            <div>
                <h5>{taskData.name}</h5>
                <p>Sequência atual: {taskData.currentSequence} dias</p>
                <p>Seu recorde: {taskData.highestSequence} dias</p>
            </div>
            <ion-icon name="checkbox"></ion-icon>
        </HabitSC>
    )
}

