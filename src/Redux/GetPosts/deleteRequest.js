import axios from "axios";

export function deleteReq(index){
    return axios.delete(
        `http://localhost:5000/posts/${index}`
    )
}

