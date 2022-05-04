import Post from './Post.component';
import { useSelector , useDispatch } from 'react-redux';
import { loadPostAsync } from '../../../Redux/GetPosts/PostsReducer';
import { useContext, useEffect } from 'react';
import { loginContext } from '../../../Contexts/LoginContext';


const Container = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.posts);
    // console.log("State",state)
    const auth = useContext(loginContext);


    let postStatus = state.Post_status
    if(state.Post_status === '' ){
        postStatus = `${state?.posts?.length || 0} Posts Available`
    } 
    useEffect(()=>{
        try{

        dispatch(loadPostAsync())
        } catch (e) {
            postStatus = `Failed to load posts`
        }
    },[dispatch])

    const lastLogin = new Date(auth.lastLogin);
    
    if(!auth.state) return <p>You're not Logged in.</p>

    if(state.posts == undefined) return <p>Failed to load posts.</p>

    return (
        <>
            <p>You're now Logged in as {auth.user}</p>
            <p>Last Login : {lastLogin.toUTCString()}</p>
            <div style={{marginTop:"10vh"}}>
                <p>{postStatus}</p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                    
                    {
                        state.posts.map((post,index)=>{
                            return <Post key={index} index={index} data={post}/>
                        })
                    }
                    
                    
                </div>
            </div>
        </>
    )
}


export default Container;
