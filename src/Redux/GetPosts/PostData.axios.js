import axios from "axios";

export function postRequest(data){
    return axios.post(
        `http://localhost:5000/posts`,data
    )
}

