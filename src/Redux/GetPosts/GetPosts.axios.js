import axios from "axios";

export function getRequest(data){
    return axios.get(
        `http://localhost:5000/posts`
    )
}