import React, { useContext, useEffect, useState } from 'react';
import './SinglePost.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';

const SinglePost = () => {
    const PF = "http://localhost:7000/images/";
    const {user} = useContext(Context)
    const {postId} = useParams();
    const [post, setPost] = useState([]);

    const {title, username, createdAt, desc, postPhoto} = post;

    useEffect(() => {
        const getPost = async() => {
            const res = await axios.get(`http://localhost:7000/api/posts/${postId}`)
            setPost(res.data);
        }
        getPost()
    }, [postId]);


    const handleDelete = async() => {
        try{
            await axios.delete(`http://localhost:7000/api/posts/${postId}`, {
                data:{username: user.username}
            });
            window.location.replace("/")
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
                                    <i className="postEdit far fa-edit"></i>
                                    <i onClick={handleDelete} className="postDelete far fa-trash-alt"></i>
                                </>
                            }
                        </div>
                    </div>
                        <span className="singlePostDate">{new Date(createdAt).toDateString()}</span>

                        
                        <h3 className="singlePostTitle">{title}</h3>
                    <div className="singlePostDesc">
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default SinglePost;