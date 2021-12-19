import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const PF = "http://localhost:7000/images/"
    const {title, desc, postPhoto, createdAt,categories, _id} = post;
    return (
        <>
            <div className="postSection">
                <div className="postImg">
                    {
                        postPhoto && 
                        <div>
                            <img src={PF + postPhoto} alt="" />
                        </div>
                    }
                </div>
                <div className="postInfo">
                    <div className="postCatsDate">
                        <div>
                            {
                                categories.map(category => (
                                    <span className="postCat">{category.name}</span>
                                ))
                            }
                        </div>
                        <div className="postDate">
                            <span>{new Date(createdAt).toDateString()}</span>
                        </div>
                    </div>
                    <div className="postTitle">
                        <Link to={`/post/${_id}`}>
                            <h3>{title}</h3>
                        </Link>
                    </div>

                    <div className="postDesc">
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;