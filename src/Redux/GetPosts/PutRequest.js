import axios from "axios";

export function PutRequest(data,index){
    return axios.put(
        `http://localhost:5000/posts/${index}`,data
    )
}

