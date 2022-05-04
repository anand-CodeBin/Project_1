import { toggleRead, deletePost } from '../../../Redux/GetPosts/PostsReducer';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
const Post = (props) => {
    const dispatch = useDispatch();

    /* let disc = props.data.disc;
    let LongDisc = false;
    let shortDisc = '';
 */

    
    const [disc , setDisc] = useState({
      disc : props.data.disc,
      is_long_disc : false,
      shortDisc : ''
    });


    useEffect(()=>{
      setDisc({
        disc : props.data.disc,
        is_long_disc : false,
        shortDisc : props.data.disc.slice(0,50) + '...'
      })
    },[])
    


    function handleREAD(){
      console.log('read')
      dispatch(toggleRead(props.index));
    }

    function handleShowMore(){
      setDisc({
        disc : props.data.disc,
        is_long_disc : !disc.is_long_disc,
        shortDisc : props.data.disc.slice(0,50) + '...'
      })
    }

    function handleDelete(){
      dispatch(deletePost(props.index))
    }
    

    return (
        <div className="col">
        <div className="card shadow-sm">
          {/* {<svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"/>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg> */}

            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.data.thumbnail}></img>

          <div className="card-body">
            <p className="card-text">{disc.is_long_disc ? disc.disc : disc.shortDisc}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn text-light btn-sm btn-success btn-outline-secondary" onClick={handleREAD}>{props.data.has_read ? 'Mark as Unread' : 'Mark as Read'}</button>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleDelete}>Delete</button>
                <button onClick={handleShowMore}>{ disc.is_long_disc ? 'Show less' : "Show More"}</button>
              </div>
              <small className="text-muted">{props.data.author}</small>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Post;