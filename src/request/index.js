import axios from "axios";

let service = axios.create({
    baseURL:"http://localhost:3000/",
    tlmeout:3000
})

export default service