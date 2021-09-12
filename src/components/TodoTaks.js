import { HabitSC, HabitTitle } from "./shared/SharedStyleds";
import { Checkbox } from 'react-ionicons';
import styled from "styled-components";

export default function TodoTask({ taskData: { id, name, currentSequence, highestSequence, done } }) {

    return (
        <HabitSC bigIcon>
            <div>
                <HabitTitle>{name}</HabitTitle>
                <p>Sequência atual: <GreenTxt isGreen={done}>{`${currentSequence} dias`}</GreenTxt></p>
                <p>Seu recorde: <GreenTxt isGreen={done && currentSequence === highestSequence}>
                    {`${highestSequence} dias`}
                </GreenTxt></p>
            </div>
            <Checkbox
                color={done ? "#8FC549" : '#EBEBEB'}
                height="90px"
                width="90px"
            />
        </HabitSC>
    )
}

const GreenTxt = styled.span`
    color: ${props => props.isGreen ? "#8FC549" : "inherit"};
`