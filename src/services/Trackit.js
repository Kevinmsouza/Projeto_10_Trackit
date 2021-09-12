import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function sendSingupRequest(body){
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}

function sendLoginRequest(body){
    return axios.post(`${BASE_URL}/auth/login`, body);
}

function getTodayTasks(config){
    return axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
}

function getHabitsList(config){
    return axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
}

function createHabit(body, config){
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
}

export {
    sendSingupRequest,
    sendLoginRequest,
    getTodayTasks,
    getHabitsList,
    createHabit
};