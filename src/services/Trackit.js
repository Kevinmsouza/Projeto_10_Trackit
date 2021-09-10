import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function sendSingupRequest(body){
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}

function sendLoginRequest(body){
    return axios.post(`${BASE_URL}/auth/login`, body);
}

export {
    sendSingupRequest,
    sendLoginRequest
};