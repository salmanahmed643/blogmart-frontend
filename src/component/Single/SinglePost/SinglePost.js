import React, { useContext, useEffect, useState } from 'react';
import './SinglePost.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';

const SinglePost = () => {
    const PF = "https://secure-headland-36866.herokuapp.com/images/";
    const {user} = useContext(Context)
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const {username, createdAt, postPhoto} = post;

    useEffect(() => {
        const getPost = async() => {
            const res = await axios.get(`https://secure-headland-36866.herokuapp.com/api/posts/${postId}`)
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost()
    }, [postId]);


    const handleDelete = async() => {
        try{
            await axios.delete(`https://secure-headland-36866.herokuapp.com/api/posts/${postId}`, {
                data:{username: user.username}
            });
            window.location.replace("/")
        } catch(err) {
        }
    };

    const handleUpdate = async (e) => {
        try{
            await axios.put(`https://secure-headland-36866.herokuapp.com/api/posts/${postId}`, {username: user.username, title, desc})
            setUpdateMode(false)
        } catch(err) {

        }
    }

    
    return (
        <>
            <div className="singlePostSection">
                <div className="singlePostWrapper">
                    <div className="singlePostImg">
                        {
                            postPhoto &&  <img src={PF + postPhoto} alt="" />
                        }
                    </div>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor"> Author: 
                            <Link to={`/?user=${username}`} style={{marginLeft: "5px"}}>
                                <span className="authorName">{username}</span> 
                            </Link>
                        </span>
                        <div className="postEditDelete">
                            {
                                username === user?.username && 
                                <>
                                    <i onClick={() => setUpdateMode(true)} className="postEdit far fa-edit"></i>
                                    <i onClick={handleDelete} className="postDelete far fa-trash-alt"></i>
                                </>
                            }
                        </div>
                    </div>
                        <span className="singlePostDate">{new Date(createdAt).toDateString()}</span>

                        {
                            updateMode ? <input onChange={e => setTitle(e.target.value)} autoFocus={true} type="text" value={title} className="singlePostTitle postTitleInput" /> :
                            <h3 className="singlePostTitle">{title}</h3>
                        }
                    <div className="singlePostDesc">
                    {
                        updateMode ? <textarea onChange={e => setDesc(e.target.value)} value={desc} className="singlePostTitle postTitleInput postTextarea" /> :
                        <p>{desc}</p>
                    }
                    </div>
                    { updateMode &&
                        <button onClick={handleUpdate} className="postUpdateButton">Update</button>}
                </div>
            </div> 
        </>
    );
};

export default SinglePost;