import { useContext, useState } from "react";
import { loginContext } from "../../../Contexts/LoginContext";
import { useDispatch } from "react-redux";
import { upload } from "../../../Redux/GetPosts/PostsReducer";
const Upload = () => {


    const auth = useContext(loginContext);
    const dispatch = useDispatch();

    const currentTime = +new Date();

    const [author, setAuthor] = useState('');
    const [Disc, setDisc] = useState('');
    const [date, setDate] = useState(currentTime);
    const [url, setURL] = useState('');

    function handleUpload(){

        if(author.length > 0 && Disc.length > 0 && url.length > 0)
        {
            dispatch(upload({
                author : author,
                disc : Disc,
                upload_time : date,
                thumbnail : url,
                has_read : false
            }))
        }
        
    }

    
    if(!auth.state) return <p>You're not Logged in.</p>

    return(
        <>
        <p>You're now Logged in as {auth.user}</p>

        <h1>Upload Form</h1>

        <input type="text" placeholder="Author" onChange={(e) => {setAuthor(e.target.value)}}/>
        <br/><br/>
        <input type="text" placeholder="Description" onChange={(e) => {setDisc(e.target.value)}}/>
        <br/><br/>
        <input type="text" value={new Date(currentTime)} onChange={(e) => {setDate(e.target.value)}}/>
        <br/><br/>
        <input type="text" placeholder="Image URL" onChange={(e) => {setURL(e.target.value)}}/>
        <br/><br/>
        <button onClick={handleUpload}> Upload </button>


        </>
    )
}

export default Upload