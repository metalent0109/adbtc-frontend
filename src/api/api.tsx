import axios from 'axios'

export default axios.create({
    baseURL: "https://btcads-backend.herokuapp.com/api/user/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})