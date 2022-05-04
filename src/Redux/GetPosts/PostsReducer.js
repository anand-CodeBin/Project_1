import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { deleteReq } from "./deleteRequest";
import { getRequest } from "./GetPosts.axios";
import { postRequest } from "./PostData.axios";
import { PutRequest } from "./PutRequest";

const InitialState = {
    posts : [],
    Post_status : 'Not Loaded' 
}

export const PostSlice = createSlice({
    name : 'Post',
    initialState : InitialState,
    reducers : {
        toggleRead : (state,action) => {
            
            state.posts[action.payload].has_read = !state.posts[action.payload].has_read;
            
            PutRequest(state.posts[action.payload] , action.payload+1)

        },
        upload : (state , action) => {
            postRequest(action.payload)
        },
        deletePost : (state , action) => {
            state.posts.splice(action.payload,1);
            deleteReq(action.payload);
        }
    },
    extraReducers : (builder) => {
        builder.addCase(loadPostAsync.pending , (state) => {
            state.Post_status = 'Loading Posts ...'
        })
        builder.addCase(loadPostAsync.fulfilled , (state ,  action) => {
            state.posts = action.payload;
            state.Post_status = ''
        })
        builder.addCase(loadPostAsync.rejected , (state , action) =>{
            state.temp = action.payload;
            state.Post_status = 'Something went wrong !'
        })
    }
})

export const loadPostAsync = createAsyncThunk(
    'Post/load',
    async (limit, {rejectWithValue}) => {
        try{
            const response = await getRequest(limit);
            // console.log(response.data)
            
            return response.data;
        }catch (err) {
            rejectWithValue(null)
            return null  
        }
    } 
)


export const {toggleRead , upload, deletePost} = PostSlice.actions
export default PostSlice.reducer
