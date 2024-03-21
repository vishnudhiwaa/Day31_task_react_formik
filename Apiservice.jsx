
import axios from 'axios'
const API_URL = "https://659d7251633f9aee790971b0.mockapi.io"

const ApiService = axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default ApiService
