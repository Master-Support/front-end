import axios from "axios"

const objetoFetch = axios.create({
    baseURL: "http://localhost:8080/api/v1/envio",
    headers: {
        "Content-Type": "application/json",
    }
})

export default objetoFetch;