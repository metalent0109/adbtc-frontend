import axios from 'axios'

export default axios.create({
    // baseURL: "http://localhost:5000/api/",
    baseURL: "https://btcads-backend.herokuapp.com/api/",
    headers: {
        "Content-Type": "application/json"
    }
})