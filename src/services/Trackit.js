import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function sendSingupRequest(body){
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}

function sendLoginRequest(body){
    return axios.post(`${BASE_URL}/auth/login`, body);
}

function getTodayData(config){
    return axios.get(`${BASE_URL}/habits/today`, config);
}

function getHabitsList(config){
    return axios.get(`${BASE_URL}/habits`, config);
}

function createHabit(body, config){
    return axios.post(`${BASE_URL}/habits`, body, config);
}

function sendDeleteRequest(id, config){
    return axios.delete(`${BASE_URL}/habits/${id}`, config);
}

export {
    sendSingupRequest,
    sendLoginRequest,
    getTodayData,
    getHabitsList,
    createHabit,
    sendDeleteRequest
};