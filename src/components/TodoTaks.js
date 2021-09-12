import styled from "styled-components"


export default function TodoTask({taskData}) {


    return(
        <Task>
            <TextArea>
                <h5>{taskData.name}</h5>
                <p>Sequência atual: {taskData.currentSequence} dias</p>
                <p>Seu recorde: {taskData.highestSequence} dias</p>
            </TextArea>
            <ion-icon name="checkbox"></ion-icon>
        </Task>
    )
}

const Task = styled.div`
    width: 90vw;
    height: 94px;
    background-color: #fff;
    margin-bottom: 10px;
    display:flex;
    align-items: center;
    border-radius: 5px;
    & ion-icon{
        font-size: 69px;
        margin: 13px;
        color: #8FC549;
    }
`

const TextArea = styled.div`
    h3 {
        font-size: 20px;
    }
`