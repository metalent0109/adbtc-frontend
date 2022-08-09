import axios from 'axios'

export default axios.create({
    baseURL: "https://btcads-backend.herokuapp.com/api/",
    headers: {
        "Content-Type": "application/json"
    }
})