import axios from "axios";

const instance = axios.create({
    baseURL: "https://base.oshsu.kg/diplom_api/app.php",
    withCredentials: true,
    headers: {
        accept: 'application/json'
    }
})

export default instance