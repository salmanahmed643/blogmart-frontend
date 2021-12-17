import React from 'react';
import './Post.css'
import post_img from '../../../img/post-1.jpg'

const Post = () => {
    return (
        <>
            <div className="postSection">
                <div className="postImg">
                    <img src={post_img} alt="" />
                </div>
                <div className="postInfo">
                    <div className="postCatsDate">
                        <div>
                            <span className="postCat">Music</span>
                            <span className="postCat">Life</span>
                        </div>
                        <div className="postDate">
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="postTitle">
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </div>

                    <div className="postDesc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore assumenda voluptas eius fugit accusamus! Ipsam a, praesentium voluptatem nihil quasi accusamus pariatur maxime repellendus tempore assumenda cupiditate quo inventore omnis sequi reiciendis fugiat quam? Alias assumenda labore fugit doloribus nostrum unde placeat, odio quod, ex pariatur eum ratione. Porro ducimus at placeat quibusdam quaerat optio quae magnam facere veritatis necessitatibus est reiciendis labore eos culpa quam in, ab omnis quos, cupiditate dolorum magni expedita reprehenderit! Ipsa soluta cupiditate dolor exercitationem iste asperiores? Iste asperiores itaque expedita? Voluptatem est quasi odio! Magnam et tempore vero soluta esse modi delectus assumenda!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;